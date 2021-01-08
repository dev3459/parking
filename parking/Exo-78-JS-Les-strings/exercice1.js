let affichePosition = document.getElementById("position");
let afficheChaineMaj = document.getElementById("chaineMaj");

let monTexte = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

// Completer le code suivant pour afficher la longueur de la variable monTexte
alert(monTexte.length);

//Ajouter du code ci dessous pour réaliser la suite de l'exercice
let position = monTexte.indexOf("i");
affichePosition.innerHTML = position;

let newString = monTexte.toUpperCase();
afficheChaineMaj.innerHTML = newString;

for(let i = 0; i < afficheChaineMaj.innerHTML.length; i++){
    if (afficheChaineMaj.innerHTML[i].includes("A")) {
        console.log(i);
    }
}