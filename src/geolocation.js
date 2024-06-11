import { getWeatherDataByCoords } from "./api";

// Standortbestimmung und Abrufen der Wetterdaten
export function getLocation() {

    navigator.geolocation.getCurrentPosition((success) => {
        const latitude = success.coords.latitude; // Breiten Koordinaten
        const longitude = success.coords.longitude; // Längen Koordinaten
        getWeatherDataByCoords(latitude, longitude); // WetterDaten werden durch die getWeatherDataByCoords aufgerufen
    }, error => {
        console.error('Error getting location:', error);
    });
}
