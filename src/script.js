function refreshWeather(response) {
    let temperatureElement = document.querySelector("#city-temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#weather-city");
    let descriptionElement = document.querySelector("#weather-description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date (response.data.time * 1000);

    timeElement.innerHTML = formatDate(date);
    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    temperatureElement.innerHTML = Math.round(temperature);
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed} km/hr`;
}

function formatDate(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = [
    	"Sunday", 
      "Monday", 
      "Tuesday", 
      "Wednesday", 
      "Thursady", 
      "Friday", 
      "Saturday"
            ];

    let day = days[date.getDay()];

		if (minutes < 10) {
			minutes = `0${minutes}`;
		}

    return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
    let apiKey = "badact1734fb41b82663o4ab9a6e5204";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchCityInput = document.querySelector("#search-form-city-input");
    
    searchCity(searchCityInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Melbourne");
