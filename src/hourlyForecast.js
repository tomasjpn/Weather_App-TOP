// Funktion zur Anzeige der stündlichen Wettervorhersage
export function showHourlyForecast(data) {
    const hourlyForecastContainer = document.getElementById("hourly-forecast");

    // Leeren des Containers für die stündliche Vorhersage
    hourlyForecastContainer.innerHTML = "";

    // Schleife durch die stündliche Vorhersage (maximal 24 Stunden)
    for (let i = 0; i < 24; i++) {
        const hourData = data.hourly[i];
        const time = new Date(hourData.dt * 1000).getHours(); // Umwandeln in Stunden
        const temp = hourData.temp;
        const icon = hourData.weather[0].icon;

        // Erstellen eines neuen Vorhersage-Elements
        const forecastItem = document.createElement("div");
        forecastItem.classList.add("hourly-forecast-item");
        forecastItem.innerHTML = `
            <div class="hour">${time}:00</div>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon" class="w-icon">
            <div class="temp">${temp}°</div>
        `;

        // Hinzufügen des Elements zum Container
        hourlyForecastContainer.appendChild(forecastItem);
    }
}
