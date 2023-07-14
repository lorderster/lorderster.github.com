function countdown() {
    var endDate = new Date("2023-07-28 18:00:00").getTime(); // Imposta la data di scadenza del countdown
    var now = new Date().getTime();
    var distance = endDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  
    document.getElementById("countdown").innerHTML =
      days + " giorni " + hours + " ore " + minutes + " minuti rimanenti";
  
    if (distance < 0) {
      document.getElementById("countdown").innerHTML = "Summer is here!";
    }
}

setInterval(countdown, 1000);
