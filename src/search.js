import { getWeatherDataByCity } from "./api";

// Suchleiste für beliebigen Standort 
export function setupSearch() {
    const locationSearchbar = document.getElementById("location-searchbar");
    const locationTop = document.getElementById("location-top");

    // Wenn das "+" betätigt wird, wird <div> mit Input-Feld und Search-Button erstellt
    const searchDiv = document.createElement('div');
    searchDiv.classList.add('Search-button-elm');
    searchDiv.innerHTML = `
        <input type="text" id="city-input" placeholder="Stadt eingeben">
        <button id="search-btn">Suche</button>
    `;

    searchDiv.style.display = 'none'; // Soll zuerst unsichtbar bleiben
    locationTop.appendChild(searchDiv); // in die DOM hinzugefügt


    function addLocation() {
        if (searchDiv.style.display === 'none') {
            searchDiv.style.display = 'block'; // Suchleiste und Such-Button werden Sichtbar
            locationSearchbar.style.display = 'none'; // "+" Button wird unsichtbar
        } else {
            searchDiv.style.display = 'none';
            locationSearchbar.style.display = 'block'; //  "+" Button wird wieder angezeigt, wenn Such-Button und Suchleiste unsichtbar werden
        }
    }

    // Eventlistener für den Such-Button
    document.getElementById("search-btn").addEventListener('click', () => {
        const cityInput = document.getElementById("city-input");
        const city = cityInput.value; // der eingegebene Inhalt aus der Suchleiste wird gespeichert in var. "city"
        if (city) { 
            getWeatherDataByCity(city); // Wenn der Ort vorhanden ist, werden die Daten für den Ort, aus der getWeatherDataByCity Funktion ausgegeben
            searchDiv.style.display = 'none'; // Such-Button und Suchleisten werden auf unsichtbar gestellt
            locationSearchbar.style.display = 'block'; // "+" Button wird erneut angezeigt
        }
    });

    locationSearchbar.addEventListener("click", addLocation);
}
