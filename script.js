document.addEventListener("DOMContentLoaded", function () {
    const locationInput = document.getElementById("locationInput");
    const searchButton = document.getElementById("searchButton");
    const locationText = document.getElementById("location");
    const temperatureText = document.getElementById("temperature");
    const descriptionText = document.getElementById("description");
    const iconImage = document.getElementById("icon");

    searchButton.addEventListener("click", function () {
        const location = locationInput.value;
        if (location) {
            getWeatherData(location);
        }
    });

    function getWeatherData(location) {
        const apiKey = '64b1d9f90bb874781e2af0a5ce001fdc';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                locationText.textContent = data.name;
                temperatureText.textContent = data.main.temp;
                descriptionText.textContent = data.weather[0].description;
                const iconCode = data.weather[0].icon;
                iconImage.src = `http://openweathermap.org/img/w/${iconCode}.png`;
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
            });
    }
});
