const apiKey = "f9028fd931477db1ec5e5be379235c31";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?appid=f9028fd931477db1ec5e5be379235c31&units=metric&q=";
const seacrhBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");


async function checkWeather(city){
  const response = await fetch(apiUrl + city + '&appid=' + apiKey);
  const data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".windspeed").innerHTML = data.wind.speed + "km/hr";

  const video = document.querySelector("#myvideo");


   if(data.weather[0].main === "Clouds"){
     video.setAttribute("src", "clouds.mp4");  
  } else if(data.weather[0].main === "Clear") {
     video.setAttribute("src", "clear.mp4");
  } else if(data.weather[0].main === "Rain") {
     video.setAttribute("src", "rain.mp4");
  } else if(data.weather[0].main === "Drizzle") {
     video.setAttribute("src", "drizzle.mp4");
  } else if(data.weather[0].main === "Mist") {
     video.setAttribute("src", "mist.mp4");
  } 
}

searchButton.addEventListener("click", ()=>{
  checkWeather(seacrhBox.value);
})

