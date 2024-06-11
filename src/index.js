
import { updateCurrentTime } from "./current-info";
import { getLocation } from "./geolocation";
import { setupSearch } from "./search";
import './hourlyForecast'; // Neu hinzugefügt
import "./styles.css";

// DOM wird erstmal vollständig geladen
document.addEventListener('DOMContentLoaded', () => {
    updateCurrentTime(); // Aktualiseren aktuellen Zeit + Datum
    setupSearch() // Suchfunktion
    getLocation(); // Standort + Wetterdaten abrufen
});