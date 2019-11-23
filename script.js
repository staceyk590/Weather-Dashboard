


$(".btn").on("click", function (event) {
console.log("clicked");


event.preventDefault();

var APIKey = "f7e59dfdb8a18df761fb7dffa1196d82";
var APIKey2= "a9cf4bf0361608272476b0414cdb7b99";
var city = $("#cityInput").val();
// Here we are building the URL we need to query the database//
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
"q="+ city +"&units=imperial&appid=" + APIKey;
console.log(queryURL);

var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?" + 
"q="+ city +"&lat=${lat}&lon=${lon}&appid=" + APIKey2;

//var queryURL2 = "http://api.openweathermap.org/data/2.5/forecast?appid=APIKey2&lat=${lat}&lon=${lon}&units=metric"
//var queryURL2 = "http://api.openweathermap.org/data/2.5/forecast?" + "q="+ city +"id=524901&APPID=" + APIKey;
console.log(queryURL2);
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

      $.ajax({
        url: queryURL2,
        method: "GET"
      }).then(function(response) {
        console.log(queryURL2);
        
        //("#forecast").text(JSON.stringify(response));
        
        console.log(response);

        //for (let index = 0; index < response.length; index++) {
        console.log("City: " + response.city.name);
        $(".city").html("City:" +response.city.name);
        console.log("Date: " + response.list[0].dt_txt);
        console.log("IconImage: " + response.weather.icon);
        console.log("Temperature (F): " + response.list[0].main.temp);
        $(".temp").html("Temp:" +response.list.main.temp);
        console.log("Humidity: " + response.list.main.humidity);
        console.log("Wind Speed: " + response.wind.speed);
          console.log("UV Index: " + response.main.uvindex);//}

        
      
        //$("#forecast").text("Humidity: " + response.main.humidity);
  
      });


// Transfer content to HTML
      $(".city").html("<h1>" + response.name + " Weather Details</h1>");
//adding html code between this tag
      $(".date").text("Date: " + response.main.date);
      // $(".iconimage").text("Icon Image: " + response.weather.icon);
      $(".temperature").text("Temperature (F) " + response.main.temp);
      $(".humidity").text("Humidity: " + response.main.humidity);
      $(".windspeed").text("Wind Speed: " + response.wind.speed);
      $(".uvindex").text("UV Index: " + response.main.uvindex);
      var imgSrc="http://openweathermap.org/img/wn/" + response.weather[0].icon + ".png"

      $("#weathericon").attr("src", imgSrc);


      
      

      // Converts the temp to Kelvin with the below formula
      var tempF = (response.main.temp - 273.15) * 1.80 + 32;
      $(".tempF").text("Temperature (Kelvin) " + tempF);

      // Log the data in the console as well
      console.log("City: " + response.name);
      console.log("Date: " + response.main.date);
      console.log("IconImage: " + response.weather[0].icon);
      console.log("Temperature (F): " + response.main.temp);
      console.log("Humidity: " + response.main.humidity);
      console.log("Wind Speed: " + response.wind.speed);
      console.log("UV Index: " + response.main.uvindex);
    });

    var historyValue = JSON.parse(localStorage.getItem("searchHistoryFromLocalStorage"));
    if(historyValue != null){
      console.log(historyValue);
      for(var i=0; i < historyValue.length; i++){
        var item = historyValue[i];
        console.log(item);
        var p = $("<p>").text(item); 
        console.log(p);   //<p>test2</p>
        $(".form-group").append(p);
      }
    }
    //and display the value from localstorage

    //when user click on search button
    $("#searchBtnId").on("click", function(){
     var searchText = $("#cityInput").val();
    console.log(searchText);

      //display that text below
      var p = $("<p>").text(searchText);    //<p>test2</p>
     $(".form-group").append(p);

      //clear the input tag
     $("#cityInput").val("");
      
    var historyFromLocalStorage = JSON.parse(localStorage.getItem("searchHistoryFromLocalStorage"));
     //is it not null

    if(historyFromLocalStorage == null){
       var historyArray = [];
        historyArray.push(searchText);  //["test"]
        //add that text to localstorage array
       localStorage.setItem("searchHistoryFromLocalStorage", JSON.stringify(historyArray));
     }else{
        historyFromLocalStorage.push(searchText);
        localStorage.setItem("searchHistoryFromLocalStorage", JSON.stringify(historyFromLocalStorage))
    }
    });

    //$("#find-movie").on("click", function(event) {

      // event.preventDefault() can be used to prevent an event's default behavior.
      // Here, it prevents the submit button from trying to submit a form when clicked
      //event.preventDefault();

      // Here we grab the text from the input box
      //var movie = $("#movie-input").val();

      // Here we construct our URL
      //var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

      // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
      // and display it in the div with an id of movie-view

      // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

      

    //function weatherBalloon( cityID ) {
     // var key = '{yourkey}';
     // fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
     // .then(function(resp) { return resp.json() }) // Convert data to json
    //  .then(function(data) {
    //    console.log(data);
     // })
     // .catch(function() {
        // catch any errors
     // });
    //}
    
   // window.onload = function() {
    //  weatherBallon( 6167865 );
    //}


   // const CURRENT_LOCATION = document.getElementsByClassName('weather-content__overview')[0];
//const CURRENT_TEMP = document.getElementsByClassName('weather-content__temp')[0];
//const FORECAST = document.getElementsByClassName('component__forecast-box')[0];


//function getWeatherData() {
      //let headers = new Headers();
    
      //return fetch(queryURL, {
       // method: 'GET',
       // headers: headers
      //}).then(data => {
       // return data.json();
      //});
    //}

    //getWeatherData().then(response => {
     // let city = response.city;
    //  let dailyForecast = response.list;

     // console.log(city);
     // console.log(dailyForecast);
    
     // renderData(city, dailyForecast);
    //});


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
