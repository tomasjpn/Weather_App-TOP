// API-Aufruf für die Wetterabfrage und Weiterverarbeitung
import { showHourlyForecast } from "./hourlyForecast";
import { showWeatherData, showWeatherData2 } from "./weatherDisplay";

// API Key
const apiKey = "1ab9663b28c7c70557cf8779d5ca5c79";

// Funktion für den Aufruf der Wetterdaten aus den Koordinaten
export async function getWeatherDataByCoords(lat, lon) { //Funktion muss mit Async deklariert werden, um await zu verwenden
    try { // Der Code-Block wird ausgeführt, falls nicht möglich -> catch err
        
        // await wie Promise -> Der gesamte Code wird erst weiter geführt, wenn die fetch Anfrage fertig ist.
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
        const data = await res.json();
        const cityName = data.name;
        const countryName = data.sys.country;
        showWeatherData(data, cityName, countryName); // Daten aus der API werden an die showWeatherData weitergegeben
        await getWeatherData(lat, lon); // Abrufen weiterer Wetterdaten wie die detaillierte Wettervorhersage
        console.log(data);
    } catch (err) {
        console.error('Error fetching weather data:', err);
    }
}

// Funktion für den Aufruf der Wetterdaten aus der Suchleiste für Namen
export async function getWeatherDataByCity(city) {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const data = await res.json();
        const latitude = data.coord.lat;
        const longitude = data.coord.lon;
        const cityName = data.name;
        const countryName = data.sys.country;
        showWeatherData(data, cityName, countryName);
        await getWeatherData(latitude, longitude);
        console.log(data);
    } catch (err) {
        console.error('Error fetching weather data:', err);
    }
}

// Wetterdaten für die Wettervorhersage
async function getWeatherData(lat, lon) {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
        const data = await res.json();
        showWeatherData2(data);
        showHourlyForecast(data); // Daten aus der API an showHourlyForecast weitergeben
        console.log(data);
    } catch (err) {
        console.error('Error fetching weather data:', err);
    }
}
