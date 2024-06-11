// API-Aufruf für die Wetterabfrage und Weiterverarbeitung

import { showWeatherData, showWeatherData2 } from "./weatherDisplay";

//API Key 
const apiKey = "1ab9663b28c7c70557cf8779d5ca5c79";

// Funktion für den Aufruf der Wetterdaten aus den Koordinaten
export function getWeatherDataByCoords(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            const cityName = data.name;
            const countryName = data.sys.country;
            showWeatherData(data, cityName, countryName); // Daten aus der API werden an die showWeatherData weitergegeben
            getWeatherData(lat, lon); // Abrufen weiterer Wetterdaten wie die detaillierte Wettervorhersage
            console.log(data);
        })
        .catch(err => {
            console.error('Error fetching weather data:', err);
        });
}

// Funktion für den Aufruf der Wetterdaten aus der Suchleiste für Namen
export function getWeatherDataByCity(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            const latitude = data.coord.lat;
            const longitude = data.coord.lon;
            const cityName = data.name;
            const countryName = data.sys.country;
            showWeatherData(data, cityName, countryName);
            getWeatherData(latitude, longitude);
            console.log(data);
        })
        .catch(err => {
            console.error('Error fetching weather data:', err);
        });
}

// Wetterdaten für die Wettervorhersage
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
