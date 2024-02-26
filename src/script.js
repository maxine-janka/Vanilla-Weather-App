function handleSearchSubmit(event) {
    event.preventDefault();
    let searchCityInput = document.querySelector("#search-form-city-input");
    let cityElement = document.querySelector("#weather-city");
    cityElement.innerHTML = searchCityInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
