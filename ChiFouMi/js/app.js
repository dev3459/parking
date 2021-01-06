let tourPlayer = document.getElementById('tourPlayer');

const pierre = document.getElementById('pierre');
const feuille = document.getElementById('feuille');
const ciseaux = document.getElementById('ciseaux');

let win = document.getElementById('win');

let gameActive = true;

const rejouer = document.getElementById('rejouer');

const choixAlgo = ['ciseaux', 'pierre', 'feuille'];

pierre.addEventListener('click', choiceUser);
feuille.addEventListener('click', choiceUser);
ciseaux.addEventListener('click', choiceUser);

function choiceUser(){
    if(this.id !== null && gameActive){
        let algoChoix = choixAlgo[Math.trunc(Math.random() * choixAlgo.length)];
        tourPlayer.innerHTML = "L'ordinateur a choisi " + algoChoix;
        tourPlayer.style.color = 'red';
        setTimeout(reinit, 2000);
        isWin(this.id, algoChoix);
        gameActive = false;
    }
}

function reinit(){
    tourPlayer.innerHTML = "Choisissez l'une des images ci-dessous";
    tourPlayer.style.color = 'blue';
}

function isWin(player, algo){
    console.log("user : " + player + " algo : " + algo);
    switch(player){
        case algo:
            win.style.display = "block";
            win.innerHTML = "Égaliter";
            rejouer.style.display = "block";
        case "pierre" && algo === "ciseaux":
            win.style.display = "block";
            win.innerHTML = "Tu as gagné !";
            rejouer.style.display = "block";
        case "pierre" && algo === "feuille":
            win.style.display = "block";
            win.innerHTML = "Le bot à gagner !";
            win.style.color = "red";
            rejouer.style.display = "block";
        case "ciseaux" && algo === "feuille":
            win.style.display = "block";
            win.innerHTML = "Tu as gagné !";
            rejouer.style.display = "block";
        case "ciseaux" && algo === "pierre":
            win.style.display = "block";
            win.innerHTML = "Le bot à gagner !";
            win.style.color = "red";
            rejouer.style.display = "block";
        case "feuille" && algo === "pierre":
            win.style.display = "block";
            win.innerHTML = "Tu as gagné !";
            rejouer.style.display = "block";
        case "feuille" && algo === "ciseaux":
            win.style.display = "block";
            win.innerHTML = "Le bot à gagner !";
            win.style.color = "red";
            rejouer.style.display = "block";
    }
}


rejouer.addEventListener('click', function(){
    win.style.display = "none";
    gameActive = true;

    if(win.style.color = "red"){
        win.style.color = "green";
    }

    rejouer.style.display = "none";
    
});