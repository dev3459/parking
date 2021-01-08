//Partie 1
function paramVariable(...params){
    let texte = "Bonjour ";

    for(let param of params){
        texte += param + ", ";
    }
    return texte;
}

let instantiation1 = paramVariable("test", "essai", "exemple");
let instantiation2 = paramVariable("stringTest", "azerty", "qwerty", "test", "poyuidshg");

//Partie 2
function paramNumVariable(...calcs){
    let calculer = 0;
    for(calc of calcs){
        calculer += calc;
    }
    return parseInt(calculer);
}

let instantNumber = paramNumVariable(2,5,7.2,60,879,54540,955,45);
let instantNumber2 = paramNumVariable(59,34,46.1,50,60,40);
let instantNumber3 = paramNumVariable(47,500.562,64);

let createDiv = text => {
    let create = document.createElement('div');
    create.innerHTML = text;
    document.body.appendChild(create);
}

createDiv(instantNumber);
createDiv(instantNumber2);
createDiv(instantNumber3);

//Partie 3
function returnOnzeSoixanteSeize(un,deux){
    return parseInt(un * deux);
}

createDiv(returnOnzeSoixanteSeize(instantNumber, 11.76));