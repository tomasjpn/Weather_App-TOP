export function currentInfo() {
    const timeZone = document.getElementById("time-zone");
    const countryCity = document.getElementById("country-city");
    const weatherItems = document.getElementById("weather-items");
    const currentTime = document.getElementById("time");
    const currentDate = document.getElementById("date");
    const currentHumidity = document.getElementById("humidity");
    const futureWeatherForecast = document.getElementById("future-forecast");
    const locationSearchbar = document.getElementById("location-searchbar");
    const locationTop = document.getElementById("location-top");

    const dateArr = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    const monthArr = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

    const apiKey = "1ab9663b28c7c70557cf8779d5ca5c79";

    let latitude, longitude;
    let cityName, countryName;

    setInterval(() => {
        const time = new Date();
        const month = time.getMonth();
        const date = time.getDate();
        const day = time.getDay();
        const hour = ('0' + time.getHours()).slice(-2);
        const minutes = ('0' + time.getMinutes()).slice(-2);

        currentTime.innerHTML = `${hour}:${minutes}`;
        currentDate.innerHTML = `${dateArr[day]}, ${date} ${monthArr[month]}`;
    }, 1000);

    // Initiale Erstellung des Such-Inputs
    const searchDiv = document.createElement('div');
    searchDiv.classList.add('Search-button-elm');
    searchDiv.innerHTML = `
        <input type="text" id="city-input" placeholder="Stadt eingeben">
        <button id="search-btn">Suche</button>
    `;
    searchDiv.style.display = 'none'; // Initially hidden
    locationTop.appendChild(searchDiv);

    function addLocation() {
        if (searchDiv.style.display === 'none') {
            searchDiv.style.display = 'block';
            locationSearchbar.style.display = 'none'; // Hide the "+" button
        } else {
            searchDiv.style.display = 'none';
            locationSearchbar.style.display = 'block'; // Show the "+" button
        }
    }

    document.getElementById("search-btn").addEventListener('click', () => {
        const cityInput = document.getElementById("city-input");
        const city = cityInput.value;
        if (city) {
            getWeatherDataByCity(city);
            searchDiv.style.display = 'none'; // Hide after search
            locationSearchbar.style.display = 'block'; // Show the "+" button again
        }
    });

    locationSearchbar.addEventListener("click", addLocation);

    navigator.geolocation.getCurrentPosition((success) => {
        latitude = success.coords.latitude;
        longitude = success.coords.longitude;
        getWeatherDataByCoords(latitude, longitude);
    }, error => {
        console.error('Error getting location:', error);
    });

    function getWeatherDataByCoords(lat, lon) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                cityName = data.name;
                countryName = data.sys.country;
                showWeatherData(data);
                getWeatherData(lat, lon);
                console.log(data);
            })
            .catch(err => {
                console.error('Error fetching weather data:', err);
            });
    }

    function getWeatherDataByCity(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                latitude = data.coord.lat;
                longitude = data.coord.lon;
                cityName = data.name;
                countryName = data.sys.country;
                showWeatherData(data);
                getWeatherData(latitude, longitude);
                console.log(data);
            })
            .catch(err => {
                console.error('Error fetching weather data:', err);
            });
    }

    function showWeatherData(data) {
        if (data.main && typeof data.main.humidity !== 'undefined' && typeof data.main.temp !== 'undefined') {
            let { humidity, temp } = data.main;
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

    function getWeatherData(lat, lon) {
        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                showWeatherData2(data);
                console.log(data);
            })
            .catch(err => {
                console.error('Error fetching weather data:', err);
            });
    }

    function showWeatherData2(data) {
        let otherDayForecast = "";
        for (let i = 1; i < data.daily.length; i++) {
            const dayDate = new Date(data.daily[i].dt * 1000);
            const dayName = dateArr[dayDate.getDay()];
            const dayOfMonth = dayDate.getDate();
            const monthNum = dayDate.getMonth() + 1;
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
}
