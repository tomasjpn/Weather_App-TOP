import { addLocation } from "./change-location";

export function currentInfo() {
    addLocation
    const timeZone = document.getElementById("time-zone");
    const countryCity = document.getElementById("country-city");
    const weatherItems = document.getElementById("weather-items");
    const currentTime = document.getElementById("time");
    const currentDate = document.getElementById("date");
    const currentHumidity = document.getElementById("humidity");
    const futureWeatherForecast = document.getElementById("future-forecast");
  
    //Array für WochenTage sowie Monate
    const dateArr = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    const monthArr = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
  
    //API Key
    const apiKey = "1ab9663b28c7c70557cf8779d5ca5c79";
  
    
    let latitude, longitude;
    let cityName, countryName;
  
    //Intervall, das den aktuellen Datum sowie Uhrzeit jeweils nach 1er Sekunde aktualisiert
    setInterval(() => {
        const time = new Date();
        const month = time.getMonth();
        const date = time.getDate();
        const day = time.getDay();
        const hour = ('0' + time.getHours()).slice(-2); // Füge ein führendes Nullzeichen hinzu
    const minutes = ('0' + time.getMinutes()).slice(-2); // Füge ein führendes Nullzeichen hinzu

        currentTime.innerHTML = `${hour}:${minutes}`;
        currentDate.innerHTML = `${dateArr[day]}, ${date} ${monthArr[month]}`;
    }, 1000);


    // GeoLocation vom Benutzer erfassen
    navigator.geolocation.getCurrentPosition((success) => { // Success Callback-Funktion, die success als ein Argument erhält, das wiederum ein Objekt mit den Informationen über die Posiion des Benutzers enthält 
        latitude = success.coords.latitude; // Die Breitengrad-Koordinate der aktuellen Position.
        longitude = success.coords.longitude; // Die Längengrad-Koordinate der aktuellen Position.
        getWeatherData2();
    }, error => {
        console.error('Error getting location:', error);
    });
  
    function getWeatherData() { // Funktion, die eine HTTP-Anfrage an die angegebene URL sendet.
        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`)
            .then(res => res.json()) // Verarbeitet die Antwort (res) und konvertiert sie in ein JSON-Objekt.
            .then(data => {
                showWeatherData2(data); // Wetterdaten werden angezeigt
                console.log(data) //Wetterdaten aus der API
            })
            .catch(err => {
                console.error('Error fetching weather data:', err);
            });
    }
  
    function getWeatherData2() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                cityName = data.name; // Stadtname aus den Wetterdaten abrufen
                countryName = data.sys.country; // Landesname aus den Wetterdaten abrufen
                showWeatherData(data);
                getWeatherData();  // Erst hier die One Call API abfragen, um sicherzustellen, dass cityName und countryName gesetzt sind
                console.log(data);
            })
            .catch(err => {
                console.error('Error fetching weather data:', err);
            });
    }
  

    function showWeatherData(data) {
           // Objekt aus Data muss main enthalten, ob humidity sowie temp definiert sind
        if (data.main && typeof data.main.humidity !== 'undefined' && typeof data.main.temp !== 'undefined') {
            let { humidity, temp } = data.main; // Destrukturierung vom Objekt -> Eigenschaften aus dem Objekt direkt in Variablen zuweisen
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
  
    function showWeatherData2(data) {
        let otherDayForecast = "";
        for (let i = 1; i < data.daily.length; i++) { //Iterrieren durch das Array 

            const dayDate = new Date(data.daily[i].dt * 1000); //Zeit wird von Sekunden in Millisekunden konvertiert
            const dayName = dateArr[dayDate.getDay()];
            const dayOfMonth = dayDate.getDate();
            const monthNum = dayDate.getMonth() + 1; // Um 1 erhöhen, sonst wäre der Januar als 0 dargestellt
            const icon = data.daily[i].weather[0].icon;
            const tempDay = data.daily[i].temp.day;
            const tempNight = data.daily[i].temp.night;
            otherDayForecast += `<div class="weather-forecast-item" id="t-temp">
                <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon" class="w-icon">
                 <div class="date">${dayOfMonth}.${monthNum}</div>
                <div class="day">${dayName}</div>
                <div class="temp">Tag ${tempDay} °</div>
                <div class="temp">Nacht ${tempNight} °</div>
            </div>`;  //Die Variable otherDayForecast wird nach jeder Iterrierung mit weiteren  Wetter-Tag ergänzt
        }
        futureWeatherForecast.innerHTML = otherDayForecast; 
    }

    addLocation();
  }
  
  //http-server -S -C cert.pem -K key.pem