let compteur = 59;
let item = document.getElementById("comptage");

let time = setInterval(function () {
    if(compteur >= 0) {
        item.innerHTML = compteur;
        compteur--;
    }else{
        stopTime();
    }
}, 1000);

function stopTime() {
    clearInterval(time);
}