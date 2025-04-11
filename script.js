const apiKey = "f9028fd931477db1ec5e5be379235c31";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

searchBox.addEventListener("keydown", function (event) {
   if (event.key === "Enter") {
     searchButton.click();
   }
 });


async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + "&appid=" + apiKey);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".windspeed").innerHTML = data.wind.speed + " km/hr";
    document.querySelector(".description").innerHTML = data.weather[0].description;

    // Coordinates
    document.getElementById("coordinates").innerHTML = `Lat: ${data.coord.lat} | Lon: ${data.coord.lon}`;

    // Background Video Change
    const video = document.querySelector("#myvideo");
    const weatherType = data.weather[0].main;

    switch (weatherType) {
      case "Clouds":
        video.setAttribute("src", "clouds.mp4");
        break;
      case "Clear":
        video.setAttribute("src", "clear.mp4");
        break;
      case "Rain":
        video.setAttribute("src", "rain.mp4");
        break;
      case "Drizzle":
        video.setAttribute("src", "drizzle.mp4");
        break;
      case "Mist":
        video.setAttribute("src", "mist.mp4");
        break;
      default:
        video.setAttribute("src", "clouds.mp4");
    }
  } catch (error) {
    alert("City not found or API error.");
  }
}

searchButton.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
