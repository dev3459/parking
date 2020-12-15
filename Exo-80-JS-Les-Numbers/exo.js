//Exo 1
const isInteger = document.getElementById("is-integer");
const valueNumber = isInteger.innerHTML;

if(valueNumber === parseInt(valueNumber)){
    isInteger.innerHTML += " est un nombre entier !";
}else{
    isInteger.innerHTML += " n'est pas un nombre entier !";
}

//Exo 2
const isNan = document.getElementById("is-nan");
if(isNaN(isNan.innerHTML)){
    isNan.innerHTML += " n'est pas un nombre !";
}else{
    isNan.innerHTML += " Est un nombre !";
}

//Exo 3
const float = document.getElementById("parse-float");
let phrase = float.innerHTML.substr(6);
let chiffre = float.innerHTML.substr(0, 6);
chiffre = parseFloat(chiffre) * 22;
float.innerHTML = chiffre + phrase;

//Exo 4
const int = document.getElementById("parse-int");
let texte = int.innerHTML.substr(2);
let number = int.innerHTML.substr(0,2);
number = number / 22;
int.innerHTML = parseInt(number) + texte;

//Exo 5
const fixed = document.getElementById("to-fixed");
let fix = fixed.innerHTML;
fixed.innerHTML = parseFloat(fix).toFixed(2);