let voiture = {
    "Nom" : "Eggo",
    "imgUrl" : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    "nombresRoues" : 4,
    "Couleur" : "Marron",
    "Constructeur" : "Citroen",
    "Carburant" : "Solaire",
    "nombrePortes" : 3,
    "Autonomie" : "450km",
    "vitesseMaxi" : "120km/h"
};

let nameCar = document.getElementById('name');
let imgCar = document.getElementById('imgCar');
let nbrRoue = document.getElementById('nbrRoue');
let color = document.getElementById('color');
let constructor = document.getElementById('constructor');
let carburant = document.getElementById('carburant');
let nbrDoor = document.getElementById('nbrDoor');
let autonomie = document.getElementById('autonomie');
let speedMax = document.getElementById('speedMax');

nameCar.innerHTML = "Le nom de la voiture futuriste :" + voiture.Nom;
imgCar.src = voiture.imgUrl;
imgCar.alt = "Voiture futuriste personnel en vente";
nbrRoue.innerHTML = "Elle a " + voiture.nombresRoues + " roues";
color.innerHTML = "Elle est de couleur " + voiture.Couleur;
constructor.innerHTML = "Le constructeur est " + voiture.Constructeur;
carburant.innerHTML = "Le carburant est " + voiture.Carburant;
nbrDoor.innerHTML = "Il y a " + voiture.nombrePortes + " portes";
autonomie = "Le niveau d'autonomie est de " + voiture.Autonomie;
speedMax = "La vitesse maximale est de " + voiture.vitesseMaxi;