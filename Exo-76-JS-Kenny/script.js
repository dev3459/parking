//Création de la zone de décès !
let zoneMort = document.createElement("div");
zoneMort.style.width = 50 + "px";
zoneMort.style.height = 50 + "px";
zoneMort.style.position = "absolute";
zoneMort.style.top = 0;
zoneMort.style.backgroundColor = "red";
zoneMort.style.zIndex = -5;
document.getElementById('viewport').append(zoneMort);


//Création du score de mort de kenny !
let textMort = document.createElement("p");
textMort.style.zIndex = 3;
textMort.innerHTML = 0;
textMort.style.position = "absolute";
textMort.style.top = 70 + "px";
textMort.style.left = 160 + "px";
textMort.style.fontFamily = "cursive";
textMort.style.fontSize = 1.5 + "rem";
textMort.style.color = "red";
document.getElementById('viewport').append(textMort);

let kenny = document.getElementById('kenny');

function myGlobalListener(event) {
    //On gère le déplacement de kenny !
    if((event.type === 'click') && this.id === "right" || (event.type === 'keydown') && event.key === "d"){
        moveRight();
    }else if((event.type === 'click') && this.id === "left" || (event.type === 'keydown') && event.key === "q"){
        moveLeft();
    }else if((event.type === 'click') && this.id === "up" || (event.type === 'keydown') && event.key === "z"){
        moveUp();
    }else if((event.type === 'click') && this.id === "down" || (event.type === 'keydown') && event.key === "s"){
        moveDown();
    }


    //On gère la mort de kenny quand il est dans la zone mort !
    if(kenny.style.top.replace("px","") <= 20 && kenny.style.left.replace("px","") <= 20){
        textMort.innerHTML ++;
        alert("kenny est mort");
        kenny.style.left = 200 + "px";
        kenny.style.top = 200 + "px";
    }
}

//Fonction de déplacement de kenny !
function moveUp() {
    let t = parseInt(kenny.style.top);
    t -= 10;
    if(t >= 0) {
        kenny.style.top = t + 'px';
    }
}

function moveLeft() {
    let t = parseInt(kenny.style.left);
    t -= 10;
    if(t >= 0){
        kenny.style.left = t + 'px';
    }
}

function moveDown() {
    let t = parseInt(kenny.style.top);
    t += 10;
    if (t <= 470){
        kenny.style.top = t + 'px';
    }
}

function moveRight() {
    let t = parseInt(kenny.style.left);
    t += 10;
    if(t <= 470){
        kenny.style.left = t + 'px';
    }
}

document.getElementById('up').addEventListener('click', myGlobalListener);
document.getElementById('left').addEventListener('click', myGlobalListener);
document.getElementById('right').addEventListener('click', myGlobalListener);
document.getElementById('down').addEventListener('click', myGlobalListener);
document.body.addEventListener('keydown', myGlobalListener);