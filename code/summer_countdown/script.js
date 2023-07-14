function countdown() {
    var endDate = new Date("2023-07-28 18:00:00").getTime(); // Imposta la data di scadenza del countdown
    var now = new Date().getTime();
    var distance = endDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").innerHTML = days + " giorni rimanenti";

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "Scaduto";
    }
}

setInterval(countdown, 1000);
