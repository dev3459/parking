document.getElementById("timestamp").innerHTML = Date.now();
document.getElementById("localDate").innerHTML = new Date().toDateString();
document.getElementById("localTime").innerHTML = new Date().toTimeString();

let day = new Date();
let futurDay = new Date();
futurDay.setDate(day.getDate() + 2);
futurDay.setHours(day.getHours() + 6);

document.getElementById("dayFutur").innerHTML = futurDay.toLocaleString();

if(day.getTime() < futurDay.getTime()){
    let interval = futurDay.getTime() - day.getTime();

    let days = Math.floor(interval / 60 / 60 / 24 / 1000);
    let hours = Math.floor(interval - (days * 60 * 60 * 24 * 1000)) / 60 / 60 / 1000;

    let divCreate = document.createElement("div");
    divCreate.innerHTML = "Entre aujourd'hui et la date imposer dans le futur : <br />";
    divCreate.innerHTML += days + " jour(s) ET <br>";
    divCreate.innerHTML += hours + " heure(s)";
    document.body.appendChild(divCreate);
}