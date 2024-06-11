// Anzeige der aktuellen Wetterdaten sowie der Wettervorhersage

export function showWeatherData(data, cityName, countryName) {
    const timeZone = document.getElementById("time-zone");
    const countryCity = document.getElementById("country-city");
    const weatherItems = document.getElementById("weather-items");
    
    if (data.main && typeof data.main.humidity !== 'undefined' && typeof data.main.temp !== 'undefined') {
        let { humidity, temp } = data.main; // Object Destructuring aus der API

        // Aktulualisierung der aktuellen Daten
        timeZone.innerHTML = `<div class="time-zone" id="time-zone">${countryName}</div>`;
        countryCity.innerHTML = `<div class="country-city" id="country-city">${cityName}</div>`;
        weatherItems.innerHTML = `<div class="weather-items" id="weather-items">
            <div class="Temperatur" id="Temperatur">${temp}<span class="degree">°</span></div>
            <div id="humidity">Luftfeuchtigkeit: ${humidity} %</div>
        </div>`;
    } else {
        console.error('Weather data is missing required properties:', data);
    }
}

// Wettervorhersage für die Woche
export function showWeatherData2(data) {
    const futureWeatherForecast = document.getElementById("future-forecast");
    const dateArr = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

    let otherDayForecast = "";
    for (let i = 1; i < data.daily.length; i++) { // Itterrieren durch das Array und nach jeder Iterrierung wird ein Tag erstellt
        const dayDate = new Date(data.daily[i].dt * 1000);
        const dayName = dateArr[dayDate.getDay()];
        const dayOfMonth = dayDate.getDate();
        const monthNum = dayDate.getMonth() + 1; // +1 , sonst würde der Januar bei 0 anfangen
        const icon = data.daily[i].weather[0].icon;
        const tempDay = data.daily[i].temp.day;
        const tempNight = data.daily[i].temp.night;
        otherDayForecast += `<div class="weather-forecast-item" id="t-temp">
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon" class="w-icon">
             <div class="date">${dayOfMonth}.${monthNum}</div>
            <div class="day">${dayName}</div>
            <div class="temp">Tag ${tempDay} °</div>
            <div class="temp">Nacht ${tempNight} °</div>
        </div>`;
    }
    futureWeatherForecast.innerHTML = otherDayForecast;
}
