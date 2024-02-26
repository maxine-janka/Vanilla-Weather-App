function refreshWeather(response) {
    let temperatureElement = document.querySelector("#city-temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#weather-city");
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
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
