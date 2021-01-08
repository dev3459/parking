//Étape 1 : Créer une variable nomVoiture et assigné Peugeot;
let nomVoiture = "Peugeot";

//Étape 2 : Créer une variable X et assigné 50;
let x = 50;

//Étape 3 : Voir le code HTML;

//Étape 4 : Créer une variable Z et W et assigné 10 et 5;
//Puis récupérer l'élément HTML div avec l'id "demo" pour y assigné la phrase de combien vaut z et w;
let z = 5;
let w = 10;
let demo = document.getElementById('demo');
demo.innerHTML = "z vaux " + z + ", w vaux " + w + ", le résultat est : " + (z + w);

//Étape 5 : Créer une variable d et assigné la valeur de z+w;
//Puis l'afficher dans un alert;
let d = z + w;
alert(d);

//Étape 6 : En une seule ligne de code, déclaration de trois variables;
let prenom = "John", nom = "doe", age = 35;

//Étape 7 : Dans une boîte d'alerte afficher la valeur de 10*5;
alert(10 * 5);

//Étape 8 : Dans une boîte d'alerte afficher la valeur de 10/2;
alert(10 / 2);

//Étape 8 Bonus : Dans une boîte d'alerte afficher la valeur du reste après la division de 15 / 9;
alert(15 % 2);

//Étape 9 : Créer deux variables en une seule ligne et faire en sorte que l = 15 en passant par k;
let l = 10, k = 5;
l = l + k;

//Étape 10 : Créer une fonction maFonction et affiché un message;
function maFonction(){
    alert("Salut tout le monde !");
}
maFonction();

//Étape 11 : Créer une fonction de retour et retourner bonjour;
function maFonctionDeRetour(){
    return "Bonjour!";
}

let divRetour = document.getElementById('demoRetour');
divRetour.innerHTML = maFonctionDeRetour();

//Étape 12 : Voir le code HTML

//Étape 13 : Ajouter un écouteur d'évènement au click;
let btn = document.getElementById('monBoutton');
btn.addEventListener('click', () => alert('click du boutton'));

//Étape 14 : Déclaration du boutton over et ajout du mouseover changement de couleur en rouge;
let btnMouseOver = document.getElementById('changeSurOver');
btnMouseOver.addEventListener('mouseover', () => divRetour.style.backgroundColor = 'red');

//Étape 15 : Création du variable txt et associé "une longue phrase" et créer une seconde avec sa longueur;
let txt = "une longue phrase", longueur = txt.length;
alert(longueur);

//Étape 16 : Créer 2 variables avec du string dedans et l'afficher dans un alert en une seule ligne;
let str1 = "Bonjour", str2 = " le monde !";
alert(str1 + str2);

//Étape 17 : Créer un tableau listeVoiture et attribuer 3 marques et stocker dans une variable la seconde valeur.
let listeVoitures = ['Renault', 'Volvo', 'Citroen'];
let maVoiture = listeVoitures[1];

//Étape 18 : Changer la première valeur en du tableau en Ford;
listeVoitures.splice(0,1,"Ford");

//Étape 19 : Affichage de la longueur du tableau dans un alert;
alert(listeVoitures.length);

//Étape 20 : Supprimer la dernière entré du tableau sans le changer lui même;
let tableauCopy = Array.from(listeVoitures);
tableauCopy.pop();

//Étape 21 : Ajouter une valeur dans le tableau sans changer le premier;
tableauCopy = Array.from(listeVoitures);
tableauCopy.push('Ferrari');

//Étape 22 : Créer une variable aléatoirement généré;
let rNumber = Math.round(Math.random() * 100);

//Étape 23 : Créer une variable pour arrondir le nombre a l'entier le plus proche;
let fNumber = Math.round(15.7);

//Étape 24 : Créer 2 variables et assigné 10 et 5 pui créer condition;
let number1 = 10, number2 = 5;
if(number1 > number2){
    alert("number1 est supérieur à number2");
}

//Étape 25 : Pareil que le 24;
let number3 = 10, number4 = 10;
number3 === number4 ? alert("number est égale à number 4") : null;

//Étape 26 : Pareil que le 25;
number1 !== number2 ? alert("number1 est différent de number2") : null;

//Étape 27 : Création d'une boucle;
for(let i = 0; i < 9; i++){
    console.log(i + 1);
}

//Étape 28 : Créer un tableua fruits avec 3 champs dedans et créer une boucle;
let arrayFruits = ['pomme','banane','poire'];
for(let i = 0; i < arrayFruits.length; i++){
    console.log(i);
}

//Étape 29 : Créer une boucle while;
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}

i = 0;
//Étape 30 : comme la 29;
while(i < 10){
    console.log(i);
    i += 2;
}

i = 0;
//Étape 31 : comme la 30;
while(i === 5){
    alert("boucle de 5 étape 31 !");
    i++;
}
