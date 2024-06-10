
export function addLocation(){
    const locationSearchbar = document.getElementById("location-searchbar");

    locationSearchbar.addEventListener("click", (event) => {
        if (!locationSearchbar.classList.contains('active')) {
            locationSearchbar.classList.add('active');
            locationSearchbar.innerHTML = `<div class="Search-button-elm">
                <input type="text" id="city-input" placeholder="Stadt eingeben">
                <button id="search-btn">Suche</button>
                </div>
            `;
        }
    });
}
