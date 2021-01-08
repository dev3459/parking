let entier = document.getElementById('entier');
let flottant = document.getElementById('flottant');
let nonNumerique = document.getElementById('non-numerique');
let rdm = document.getElementById('random');
let trunc = document.getElementById('trunc');
let remplace = document.getElementById('replace');

let ope = 10;

entier.innerHTML = parseInt(entier.innerHTML * ope);

flottant.innerHTML = (parseFloat(flottant.innerHTML) * ope) + parseInt(entier.innerHTML);

if (isNaN(nonNumerique)) {
    nonNumerique.innerHTML = 0;
}

rdm.innerHTML = Math.trunc(Math.random() * 100);

trunc.innerHTML = Math.trunc(trunc.innerHTML);


remplace.innerHTML = remplace.innerHTML.replace('world', 'GIBERT Gaëtan');