// Anzeige der aktuellen Zeit und Datum 
export function updateCurrentTime() {
    const currentTime = document.getElementById("time");
    const currentDate = document.getElementById("date");

    // Array für Wochentage und Monate
    const dateArr = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    const monthArr = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

    // Intervall: jede 1 sek. wird Uhrzeit und Datum aktualisiert
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
}
