const inputBox = document.querySelector(".input");
const seacrhBtn = document.getElementById("search-btn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");

const checkedWeather = async (city) => {
  const apiKey = "29d157950f07a3a2b20aff578d4b8229";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const weatherData = await fetch(`${url}`).then((response) => response.json());

  temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;
  description.innerHTML = `${weatherData.weather[0].description}`;
  humidity.innerHTML = `${weatherData.main.humidity}%`;
  windSpeed.innerHTML = `${weatherData.wind.speed}Km/H`;

  switch (weatherData.weather[0].main) {
    case "Clear": {
      weather_img.src = "./assets/clear.png";
      break;
    }
    case "Clouds":
      weather_img.src = "./assets/cloud.png";
      break;

    case "Mist":
      weather_img.src = "./assets/mist.png";
      break;

    case "Snow":
      weather_img.src = "./assets/snowfall.png";
      break;

    case "Rain":
      weather_img.src = "./assets/rain.png";
      break;
  }
  console.log(weatherData);
};

seacrhBtn.addEventListener("click", () => {
  checkedWeather(inputBox.value);
});
