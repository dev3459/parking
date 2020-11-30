let nbr = prompt("Merci de renseigner un nombre à virgule");
let nbr2 = prompt("Merci de renseigner un second chiffre à virgule");

let nbrent = Math.trunc(nbr);
let nbrent2 = Math.trunc(nbr2);

let result = nbrent * nbrent2;

alert(result);