//Les tableaux
let names = [
    "George et ",
    "Maxime et ",
    "Fantin et ",
    "Dorian et ",
    "Florian et ",
    "Théo et ",
    "Véronique et ",
    "Alicia et ",
    "Corrine et ",
    "Christine et ",
    "Sandrine et ",
    "Sonia et "
];
let verbs = [
    "ont fait ",
    "ont vu ",
    "ont dit ",
    "ont réaliser ",
    "ont donner ",
    "ont manger ",
    "ont sorti ",
    "ont cuisiner ",
    "ont voler ",
    "ont fumé "
];
let objects = [
    "une pipe ",
    "une dague ",
    "une rose ",
    "un cigare ",
    "un ordinateur ",
    "un clavier ",
    "un hamburger ",
    "un magret de canard ",
    "une souris ",
    "une fenêtre "
];
let temperatures = [
    "à 60° ",
    "à 30° ",
    "à 69° ",
    "à 100° ",
    "à 200° ",
    "à 300° ",
    "à 305° ",
    "à 1116° ",
    "à 254° ",
    "à 286° "
];
let locations = [
    "dans la cuisine !",
    "dans la chambre !",
    "dans la cave !",
    "dans le salon !",
    "dans la grotte !",
    "dans un cinéma !",
    "dans un parc !",
    "à l'étage !",
    "chez un ami !",
    "chez les parents !"
];

//Les éléments HTML récupéré en JS
let zoneHistory = document.getElementById("zoneHistory");
let nameText = document.getElementById("name");
let btnConfirm = document.getElementById("btnConfirm");

//La variable player
let player = "";

//Évènement lors du clic sur le bouton
btnConfirm.addEventListener("click", function (){
   if(nameText.value !== ""){
       if(btnConfirm.innerHTML === "Confirmer"){
           player = nameText.value;
           btnConfirm.innerHTML = "Générer une histoire";
       }else{
            zoneHistory.innerHTML += names[getRandom(names.length)] +
                player + " " +
                verbs[getRandom(verbs.length)] +
                objects[getRandom(objects.length)] +
                temperatures[getRandom(temperatures.length)] +
                locations[getRandom(locations.length)] + "<br />";
       }
   }else{
       alert("Merci de bien définir votre prénom !");
   }
});

//Fonction randomnisation
function getRandom(number){
    return Math.trunc(Math.random() * number);
}