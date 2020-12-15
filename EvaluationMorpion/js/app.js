//Declaration of clickable variables === Déclaration des variables cliquables !
let rejouer = document.getElementById("rejouer");
let cases = document.querySelectorAll(".case");

let playerTurnCount = 0;
let finish = false;

let ia = document.getElementById("ia");
let iaActive = false;

let countCases = 0;

//Event of clicking on a cell === Évènement du clic sur une case
for(let caseACocher of cases){
    caseACocher.addEventListener("click", function (){
        if(!this.innerHTML){
            if(finish === false){
                if(iaActive){
                    countCases += 2;
                    this.innerHTML = "X";
                    if(countCases < 10) {
                        iaGame();
                    }
                    isWin();
                }else{
                    this.innerHTML = tourPlayer();
                    isWin();
                }
            }else{
                alert("La partie est finie !");
            }
        }
    });
}

//Event active IA ! === Évènement activation de l'IA !
ia.addEventListener("click", function (){
    if(iaActive === false){
        iaActive = true;
        ia.innerHTML = "Désactiver IA";
    }else{
        iaActive = false;
        ia.innerHTML = "Jouer avec l'IA";
    }
});

//Event of clicking on a button restart === Évènement du clic sur recommencer
rejouer.addEventListener("click",function (){
    window.location.reload();
});

//Who's is this === A qui est le tour
function tourPlayer(){
    playerTurnCount++;
    return playerTurnCount % 2 === 0 ? "O" : 'X';
}

//Checking if the player has won ! === Vérification si le joueur a gagné !
function isWin(){
    //Horizontalement
    if((cases[0].innerHTML !== "" && cases[0].innerHTML === cases[1].innerHTML && cases[1].innerHTML === cases[2].innerHTML) ||
        (cases[0].innerHTML !== "" && cases[0].innerHTML === cases[3].innerHTML && cases[3].innerHTML === cases[6].innerHTML) ||
        (cases[0].innerHTML !== "" && cases[0].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[8].innerHTML) ||
        (cases[0].innerHTML !== "" && cases[0].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[8].innerHTML)){
            win(cases[0].innerHTML);
    }
    else if(cases[3].innerHTML !== "" && cases[3].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[5].innerHTML){
        win(cases[3].innerHTML);
    }
    else if(cases[6].innerHTML !== "" && cases[6].innerHTML === cases[7].innerHTML && cases[7].innerHTML === cases[8].innerHTML){
        win(cases[6].innerHTML);
    }
    //Verticalement
    else if(cases[1].innerHTML !== "" && cases[1].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[7].innerHTML){
        win(cases[1].innerHTML);
    }
    else if((cases[2].innerHTML !== "" && cases[2].innerHTML === cases[5].innerHTML && cases[5].innerHTML === cases[8].innerHTML) ||
        (cases[2].innerHTML !== "" && cases[2].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[6].innerHTML)){
            win(cases[2].innerHTML);
    }
    //Diagonal
    else if(cases[0].innerHTML !== "" && cases[1].innerHTML !== "" && cases[3].innerHTML !== "" && cases[4].innerHTML !== "" && cases[5].innerHTML !== "" && cases[6].innerHTML !== "" && cases[7].innerHTML !== "" && cases[8].innerHTML !== ""){
        gameOver();
    }
}

//Function when one of the players wins ! === Fonction quand l'un des joueurs gagne !
function win(joueur){
    alert("Le joueur qui avait : " + joueur + " a gagné !");
    finish = true;
    rejouer.style.display = "block";
}

//Function when all players lose ! === Fonction quand tout les joueurs perdent !
function gameOver(){
    alert("perdu");
    finish = true;
    rejouer.style.display = "block";
}

//Function IA ! === Fonction de l'IA !
function iaGame(){
    let caseChoiceForIA  = Math.trunc(Math.random() * 9);
    while(cases[caseChoiceForIA].innerHTML !== ""){
        caseChoiceForIA = Math.trunc(Math.random() * 9);
    }
    cases[caseChoiceForIA].innerHTML = "O";
}