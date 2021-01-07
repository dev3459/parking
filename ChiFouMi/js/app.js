let tourPlayer = document.getElementById('tourPlayer');

const pierre = document.getElementById('pierre');
const feuille = document.getElementById('feuille');
const ciseaux = document.getElementById('ciseaux');

let win = document.getElementById('win');

let gameActive = true;

const rejouer = document.getElementById('rejouer');

const history = document.getElementById('zoneHistorique');

const choixAlgo = ['ciseaux', 'pierre', 'feuille'];

pierre.addEventListener('click', choiceUser);
feuille.addEventListener('click', choiceUser);
ciseaux.addEventListener('click', choiceUser);

function choiceUser(){
    if(this.id !== null && gameActive){
        let algoChoix = choixAlgo[Math.trunc(Math.random() * choixAlgo.length)];
        tourPlayer.innerHTML = "L'ordinateur a choisi " + algoChoix;
        tourPlayer.style.color = 'red';
        isWin(this.id, algoChoix);
        gameActive = false;
    }
}

function isWin(player, algo){
    if(player === "pierre" && algo === "ciseaux") {
        win.style.display = "block";
        win.innerHTML = "Tu as gagné !";
        console.log(win.innerText);
    }else if(player === "pierre" && algo === "feuille"){
        win.style.display = "block";
        win.innerHTML = "Le bot à gagner !";
        win.style.color = "red";
        console.log(win.innerText);
    }else if(player === "ciseaux" && algo === "feuille"){
        win.style.display = "block";
        win.innerHTML = "Tu as gagné !";
        console.log(win.innerText);
    }else if(player === "ciseaux" && algo === "pierre") {
        win.style.display = "block";
        win.innerHTML = "Le bot à gagner !";
        win.style.color = "red";
        console.log(win.innerText);
    }else if(player === "feuille" && algo === "pierre") {
        win.style.display = "block";
        win.innerHTML = "Tu as gagné !";
        console.log(win.innerText);
    }else if(player === "feuille" && algo === "ciseaux"){
        win.style.display = "block";
        win.innerHTML = "Le bot à gagner !";
        win.style.color = "red";
        console.log(win.innerText);
    }else{
        win.style.display = "block";
        win.innerHTML = "Égaliter";
        console.log(win.innerText);
    }
    history.innerHTML += `\n Vous : ${player} et l'ordinateur : ${algo}`;
    rejouer.style.display = "block";
}


rejouer.addEventListener('click', function(){
    win.style.display = "none";
    gameActive = true;

    tourPlayer.innerHTML = "Choisissez l'une des images ci-dessous";
    tourPlayer.style.color = 'blue';

    if(win.style.color === "red"){
        win.style.color = "green";
    }

    rejouer.style.display = "none";
});