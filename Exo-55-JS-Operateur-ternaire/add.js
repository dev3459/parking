let firstParaph = document.getElementById('premierP');
let spancinq = document.getElementById('cinq');
let spandouze = document.getElementById('douze');
let spanresult = document.getElementById('resultat');
let body = document.getElementById('body');

spanresult.innerHTML = parseInt(spancinq.innerHTML) + parseInt(spandouze.innerHTML);

firstParaph.innerHTML = parseInt(spanresult.innerHTML) < 10 || parseInt(spanresult.innerHTML) < 0 ?
    firstParaph.innerHTML = 'La valeur a changer' : firstParaph.style.display = 'none';

body.style.backgroundColor = "cyan";