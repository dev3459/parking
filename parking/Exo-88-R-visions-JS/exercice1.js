//Déclaration du tableau !
let arrayUsers = [];

//Zone de création !
//Création de l'input
createInput("input", "text", "Votre nom :", document.body, "name");

//Création des boutons
create("button", "Enregistrer votre nom !", document.body, "submit");
create("button", "Génération d'un nom enregistré", document.body, "submitGenerate");
create("button", "Affichez tout le tableau", document.body, "submitArrayAll");
create("button", "Supprimer le dernier élément du tableau", document.body, "submitDeleteLastElement");
create("button", "⚠ Supprimer tout le tableau ⚠", document.body, "submitDeleteAllArray");

//Création des div containeurs
create("div", "Veuillez entrez au moins 10 valeurs !", document.body, "tenElement");
create("div", null, document.body, "divGenerate");
create("div", null, document.body, "divArrayAll");

//Récupération des éléments HTML
let input = document.getElementById("name");

let tenElement = document.getElementById('tenElement');
let displayArrayAll = document.getElementById("divArrayAll");

let submitGenerate = document.getElementById("submitGenerate");
submitGenerate.style.display = "none";

let submitArrayAll = document.getElementById("submitArrayAll");
submitArrayAll.style.display = "none";

let submitDeleteLastElement = document.getElementById("submitDeleteLastElement");
submitDeleteLastElement.style.display = "none";

let submitDeleteAllArray = document.getElementById("submitDeleteAllArray");
submitDeleteAllArray.style.display = "none";
//Fin de la récupération des éléments HTML

//Les évènements des boutons !
//Bouton Enregistrer le nom dans le tableaux
submit.addEventListener("click", function(){
    //Vérification que le champs n'est pas vide ! && Que le nom n'existe pas dans le tableau !
    if(input.value !== ""){
        if(arrayUsers.includes(input.value)){
            alert("Le nom existe déjà dans le tableau !"); 
        }else{
            arrayUsers.push(input.value);
        }
    }else{
        alert("Veuillez insérer votre nom !");
    }

    //Vérification de la longueur du tableau et traitement dans certains cas !
    if(arrayUsers.length === 5){
        create("div", "Cinquième nom du tableau : " + arrayUsers[4], document.body, "fiveElement");
    }else if(arrayUsers.length < 10){
        tenElement.innerHTML = "Veuillez entrez au moins 10 valeurs !";
    }else if(arrayUsers.length >= 10){
        tenElement.innerHTML = "Élèment généré une fois que les 10 éléments du tableau à été dépassé : " + arrayUsers[Math.trunc(Math.random() * arrayUsers.length)];
    }

    //Affichage des boutons si le tableaux à une longueur de 2 champs !
    if(arrayUsers.length === 2){
        submitGenerate.style.display = "block";
        submitArrayAll.style.display = "block";
        submitDeleteLastElement.style.display = "block";
        submitDeleteAllArray.style.display = "block";
    }
});

//Bouton Génération d'un nom enregistré dans le tableau !
submitGenerate.addEventListener("click", function(){
    document.getElementById("divGenerate").innerHTML = "Le nom généré est : " + arrayUsers[Math.trunc(Math.random() * arrayUsers.length)];
});

//Bouton pour afficher tout les éléments du tableau !
submitArrayAll.addEventListener("click",function(){
    refreshArray();
});

//Bouton pour supprimer le dernier élément du tableau !
submitDeleteLastElement.addEventListener("click",function(){
    arrayUsers.pop();
    refreshArray();
    if(arrayUsers.length < 1){
        restartInfo();
    }
});

//Bouton supprimer tout les champs du tableau !
submitDeleteAllArray.addEventListener("click", function(){
    arrayUsers.splice(0, arrayUsers.length);
    refreshArray();
    restartInfo();
});
//Fin des évènements des boutons !

//LES FONCTIONS !

//Fonction affiché les éléments du tableau !
function refreshArray(){
    if(displayArrayAll.innerHTML !== ""){
        displayArrayAll.innerHTML = "";
    }
    for(let i = 0; i < arrayUsers.length; i++){
        displayArrayAll.innerHTML += i + 1 + " - " + arrayUsers[i] + "<br>";
    }
}

//La fonction de création d'un élément !
function create(element, HTMLText, parent, id){
    let elementCreate = document.createElement(element);
    elementCreate.innerHTML = HTMLText;
    elementCreate.id = id;
    parent.appendChild(elementCreate);
}

//Fonction de création d'un input !
function createInput(element, type, placeholder, parent, id){
    let elementCreate = document.createElement(element);
    elementCreate.type = "text";
    elementCreate.id = "name";
    elementCreate.placeholder = "Votre nom";
    parent.appendChild(elementCreate);
}

//Cacher les boutons quand le tableaux est vide !
function restartInfo(){
    submitGenerate.style.display = "none";
    submitArrayAll.style.display = "none";
    submitDeleteLastElement.style.display = "none";
    submitDeleteAllArray.style.display = "none";
    document.getElementById("fiveElement").innerHTML = "";
    tenElement.innerHTML = "Veuillez entrez au moins 10 valeurs !";
}