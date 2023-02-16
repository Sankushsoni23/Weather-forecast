// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// a71c38e9a1f1c47817fb142d328058c6



const weatherApi ={
    key: "a71c38e9a1f1c47817fb142d328058c6",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather?"
}


const searchInputBox = document.getElementById("input-box");
 

//Event Listener Function on Keypress

searchInputBox.addEventListener('keypress',(event) =>  {
    if(event.keycode == 13){
        console.log(searchInputBox.value); 
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display ="block";
    }
    
});


//Get weather Report

function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();
    }).then(showWeatherReport);
}

//show Weather Report

function showWeatherReport(weather){
    console.log(weather);
    let city = document.getElementById("city");
    city.innerText="${weather.name }, ${weather.sys.country}";

    let temperature = document.getElementById('temp');
    temperature.innerText ='${Math.round(weather.main.temp) }&deg;C';

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerText ='${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C(max)';

    let weatherType =document.getElementById('weather');
    weatherType.innerText ='${weather.weather[0].main}';

    let date =document.getElementById('date');
    let todayDate =new Date();
    date.innerText =dateManage(todayDate);

    if(weatherType.textContent =='Weather'){
        document.body.style.backgroundImage ="url('images/Weather.jpg')";

    }else if(weatherType.textContent =='cloud'){
        document.body.style.backgroundImage ="url('images/cloud.jpg')";

    }else if(weatherType.textContent =='autumn'){
        document.body.style.backgroundImage ="url('images/autumn.jpg')";

    }else if(weatherType.textContent =='rainy'){
        document.body.style.backgroundImage ="url('images/rainy.jpg')";

    }else if(weatherType.textContent =='spring'){
        document.body.style.backgroundImage ="url('images/spring.jpg')";

    }else if(weatherType.textContent =='sunny'){
        document.body.style.backgroundImage ="url('images/sunny.jpg')";

    }else if(weatherType.textContent =='snow'){
        document.body.style.backgroundImage ="url('images/snow.jpg')";

    }






}

//Date manage

function dateManage(dateArg){

    let days =["Sunday","Monday","Tuesday", "Wednesday","Thursday","Friday" ,"Saturday"];

    let months =["January" ,"February","March","April","May", "June","July","August" ,"September","October","November","December"];

    let year =dateArg.getFullYear();
    let month = months[date.Arg.getMonth()];
    let date =dateArg.getDate();
    let day = days[dateArg.getDay()];

    return'${date} ${month} ${day}, ${year}';
}














