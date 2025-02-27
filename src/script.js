function refreshWeather(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#weather-description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let feelsElement = document.querySelector("#feels");
  let feels = Math.round(response.data.temperature.feels_like);

  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  feelsElement.innerHTML = feels + "°C";
  temperatureElement.innerHTML = temperature;
}

function searchCity(city) {
  let apiKey = "becd8to447f4738fdfa70fbace5884f5";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();

  let searchFormInput = document.querySelector("#search-input");

  searchCity(searchFormInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("London");
