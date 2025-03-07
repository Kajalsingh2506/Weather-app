const apiKey = "16d120db685f3c4ade373d27780634d3";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWheather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.wind.speed + " km/h";

    console.log(data.weather[0].main);
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "img/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "img/images/Clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "img/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "img/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "img/images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWheather(searchBox.value);
});

checkWheather();