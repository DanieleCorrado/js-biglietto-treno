let userAge, kilometersTravelled, ticketPrice;
const pricePerKilometre = 0.21;


// Chiedo all'utente di inserire la sua età

userAge = prompt("Quanti anni hai?");

// Chiedo all'utente di inserire quanti chilometri per

kilometersTravelled = prompt("Quanti chilometri vuoi percorrere?");

// Calcolo il costo del biglietto

ticketPrice = pricePerKilometre *kilometersTravelled;

console.log(ticketPrice);

// Controllo se applicare lo sconto

if (userAge < 18) {

  ticketPrice = (ticketPrice - ((ticketPrice * 20) / 100)).toFixed(2);
} else if (userAge >= 65) {

  ticketPrice = (ticketPrice - ((ticketPrice * 40) / 100)).toFixed(2);
}

// Mostro all'utente il costo del biglietto

document.getElementById("prezzo-biglietto").innerHTML = `Il prezzo del biglietto è ${ticketPrice}`;