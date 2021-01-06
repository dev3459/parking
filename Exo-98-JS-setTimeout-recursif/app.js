//Étape 1
let btnTimeOut = document.getElementById('timeout');
let divTimeOutDiv = document.getElementById('timeout-div');

btnTimeOut.addEventListener('click', () => 
    setTimeout(() => createDiv("Mon timeout vient de créer ce div 2 secondes après le click sur le bouton !"), 2000)
);

function createDiv(text){
    let create = document.createElement('div');
    create.innerHTML = text;
    create.style.border = "1px solid black";
    divTimeOutDiv.appendChild(create);
}

//Étape 2
let divInterval = document.getElementById('interval-div');
let minutes = 0;

let btnTimeOutStart = document.getElementById('interval-start');
btnTimeOutStart.addEventListener('click', () => {
    let timeOut = function(){
        let timeTimeOutStartAndStop = setTimeout(() => {
            minutes += 60;
            divInterval.innerHTML = minutes;
            timeOut();
        } , 600000);

        let btnStopTimeOut = document.getElementById('interval-stop');
        btnStopTimeOut.addEventListener('click', () => {
            clearTimeout(timeTimeOutStartAndStop);
        });
    }
    timeOut();
});