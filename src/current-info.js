export function currentInfo() {
  const timeZone = document.getElementById("time-zone");
  const countryCity = document.getElementById("country-city");
  const weatherItems = document.getElementById("weather-items");
  const currentTime = document.getElementById("time");
  const currentDate = document.getElementById("date");
  const currentHumidity = document.getElementById("humidity");
  const futureWeatherForecast = document.getElementById("future-forecast");

  // Array für die Tage und Monate
  const dateArr = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
  const monthArr = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

  const apiKey = "1ab9663b28c7c70557cf8779d5ca5c79";

  // Intervall-Funktion => wird die ganze Zeit ausgeführt, nach jeder Sekunde werden die Daten aktualisiert
  setInterval(() => {

      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const minutes = time.getMinutes();

      //Live Anzeige der Uhrzeit und Datums
      currentTime.innerHTML = `${hour}:${minutes}`;
      currentDate.innerHTML = `${dateArr[day]}, ${date} ${monthArr[month]}`;

  }, 1000);

  getWeatherData();

  // Ganze Woche Wetter Anzeige
  function getWeatherData() {
      navigator.geolocation.getCurrentPosition((success) => {
          let { latitude, longitude } = success.coords;

          console.log(success);

          fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`)
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  showWeatherData2(data);
              })
              .catch(err => {
                  console.error('Error fetching weather data:', err);
              });

      }, error => {
          console.error('Error getting location:', error);
      });
  }


  // Derzeitige Wetter Anzeige
  getWeatherData2()
  function getWeatherData2() {
    navigator.geolocation.getCurrentPosition((success) => {
        let { latitude, longitude } = success.coords;

        console.log(success);

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                showWeatherData(data);
                
            })
            .catch(err => {
                console.error('Error fetching weather data:', err);
            });

    }, error => {
        console.error('Error getting location:', error);
    });
}

  function showWeatherData(data) {
      if (data.main && typeof data.main.humidity !== 'undefined' && typeof data.main.temp !== 'undefined') {
          let { humidity, temp } = data.main;
          let {country} = data.sys;

          timeZone.innerHTML = `<div class="time-zone" id="time-zone">
          ${country}
      </div>`

          countryCity.innerHTML = `<div class="country-city" id="country-city">
          ${data.name}
      </div>`

          weatherItems.innerHTML =
              `<div class="weather-items" id="weather-items">
                  <div class="Temperatur" id="Temperatur">${temp}°</div>
                  <div id="humidity">Luftfeuchtigkeit: ${humidity} %</div>
              </div>`;

      
      } else {
          console.error('Weather data is missing required properties:', data);
      }


  }

  
  function showWeatherData2 (data){
    let otherDayForecast = "";


      for(let i = 1; i<data.daily.length; i++) {

        const dayDate = new Date(data.daily[i].dt*1000);
        const dayName = dateArr[dayDate.getDay()];
        const icon = data.daily[i].weather[0].icon;
        const tempDay = data.daily[i].temp.day;
        const tempNight = data.daily[i].temp.night;


        otherDayForecast +=` <div class="weather-forecast-item" id="t-temp">
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon" class="w-icon">
            <div class="day">${dayName}</div>
            <div class="temp">Tag ${tempDay} °</div>
            <div class="temp">Nacht ${tempNight} °</div>
        </div>`

      }
      
      futureWeatherForecast.innerHTML = otherDayForecast;
  }
}

//http-server -S -C cert.pem -K key.pem