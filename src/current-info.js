export function currentInfo () {
    const timeZone = document.getElementById("time-zone");
    const countryCity = document.getElementById("country-city");
    const weatherItems = document.getElementById("weather-items");
    const currentTime = document.getElementById("time");
    const currentDate = document.getElementById("date");



    // Array für die Tage und Monate
    const dateArr = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    const monthArr = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

    const apiKey = "245c48a832ecbd1739e093d99b9a5eba" ; 

// Intervall-Funktion => wird die ganze Zeit ausgeführt, nach jeder Sekunde werden die Daten aktualisiert
   setInterval(()=>{

      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const minutes = time.getMinutes();


    //Live Anzeige der Uhrzeit und Datums
    currentTime.innerHTML = hour + ":" + minutes;
    currentDate.innerHTML = dateArr[date] + ", " + date + " " + monthArr[month];


  }, 1000);

  getWeatherData();
  function getWeatherData () {
    navigator.geolocation.getCurrentPosition((success)=> {

        let {latitude, longtitude} = success.coords;

        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longtitude}&exclude=hourly.minutely&appid=${apiKey}`).then(res => res.json().then(data =>{
            console.log(date);
        }))


    })
  }

  


}