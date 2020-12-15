//Exo 1
const paraPomme = document.getElementById("index-pomme");
let pomme = "Elle est belle ma pomme !";
paraPomme.innerHTML = pomme.lastIndexOf("p");

//Exo 2
const paraLastIndexM = document.getElementById("last-index-m");
paraLastIndexM.innerHTML = pomme.lastIndexOf("m");

//Exo 3
let phrase = "Elle est belle ma pomme !";
phrase = phrase.toLowerCase();
if (phrase.startsWith("elle")){
    console.log("Commence par elle");
}

//Exo 4
if(phrase.endsWith("!")){
    console.log("Se termine par un point d'exclamation !");
}

//Exo 5
const subsPomme = document.getElementById("pomme");
let motRecup = phrase.substr(18, 5);
subsPomme.innerHTML = motRecup;

//Exo 6
const oneLine = document.getElementById("one-line");
for(let i = 0; i < phrase.length; i++){
    oneLine.innerHTML += phrase[i] + "<br>";
}