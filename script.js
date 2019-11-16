


$(".btn").on("click", function (event) {
console.log("clicked");

event.preventDefault();

var APIKey = "f7e59dfdb8a18df761fb7dffa1196d82";
var city = $("#cityInput").val();
// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
"q="+ city +"&units=imperial&appid=" + APIKey;

// Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {

// Log the queryURL
      console.log(queryURL);

// Log the resulting object
      console.log(response);

// Transfer content to HTML
      $(".city").html("<h1>" + response.name + " Weather Details</h1>");
//adding html code between this tag
      $(".date").text("Date: " + response.main.date);
      $(".iconimage").text("Icon Image: " + response.main.iconimage);
      $(".temp").text("Temperature (F) " + response.main.temp);
      $(".humidity").text("Humidity: " + response.main.humidity);
      $(".wind").text("Wind Speed: " + response.wind.speed);
      $(".uvindex").text("UV Index: " + response.main.uvindex);
      
      

      // Converts the temp to Kelvin with the below formula
      var tempF = (response.main.temp - 273.15) * 1.80 + 32;
      $(".tempF").text("Temperature (Kelvin) " + tempF);

      // Log the data in the console as well
      console.log("City: " + response.city);
      console.log("Date: " + response.main.date);
      console.log("IconImage: " + response.main.iconimage);
      console.log("Temperature (F): " + response.main.temp);
      console.log("Humidity: " + response.main.humidity);
      console.log("Wind Speed: " + response.wind.speed);
      console.log("UV Index: " + response.main.uvindex);
    });


   // $.ajax({
    //  url: queryURL, //API Call
    //  dataType: "json",
    //  type: "GET",
    //  data: {
     //   q: city,
     //   appid: APIKey,
    //    units: "metric",
     //   cnt: "10"
     // },
     // success: function(data) {
     //   console.log('Received data:', data) // For testing
     //   var wf = "";
     //   wf += "<h2>" +  response.city + "</h2>"; // City (displays once)
     //   $.each(data.list, function(index, val) {
      //    wf += "<p>" // Opening paragraph tag
      //    wf += "<b>Day " + index + "</b>: " // Day
      //    wf += val.main.temp + "&degC" // Temperature
      //    wf += "<span> | " + val.weather[0].description + "</span>"; // Description
      //    wf += "<img src='https://openweathermap.org/img/w/" + val.weather[0].icon + ".png'>" // Icon
      //    wf += "</p>" // Closing paragraph tag
      //  });
      //  $("#showWeatherForcast").html(wf);
    //  }
   // });


}); 
