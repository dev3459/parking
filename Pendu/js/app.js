let mots = ["chaise", "feuille", "banane", "camion", "chaussure", "gendarme", "souris", "ascenseur", "brouette", "chemise"];
let input = document.getElementById("user-letter");
let buttonVerify = document.getElementById("letterTry");
let divEssai = document.getElementById("essai");
let motRandom = mots[Math.floor(Math.random()*mots.length)];
let guessWord = document.getElementById("guessWord");
let answerTableau = [];
let essais = 6;

let img = document.getElementById('img');
img.src = 'img/imgPrincipal.png';

divEssai.innerHTML = "essais restant " + essais;
console.log(motRandom);

for (let i = 0; i < motRandom.length; i++) {
    answerTableau[i] = "_";
    guessWord.innerHTML = answerTableau.join(" ");
}

buttonVerify.addEventListener("click", function () {
    let letter = input.value;
    let found = true;
    historique();
    for (let i = 0; i < motRandom.length; i++) {
        if (motRandom[i] === letter) {
            answerTableau[i] = letter;
            guessWord.innerHTML = answerTableau.join(" ");
        }
        else if (!motRandom.includes(letter)) {
            found = false;
        }
    }
    if (!found) {
        essais--;
        divEssai.innerHTML = "essais restant " + essais;
        img.src = 'img/'+ essais +'.png';
    }
    if (essais <= 0) {
        alert("Perdu ! Le mot était : " + motRandom);
        window.location.reload();
    }
    if (!answerTableau.includes("_")) {
        alert("Gagné !");
        window.location.reload();
    }
});

let history = document.getElementById('history');

function historique(){
    let para = document.createElement("p");
    para.id = "pHistory";
    para.innerHTML = input.value;
    history.appendChild(para);
}

function j