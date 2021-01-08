// Inutile de modifier le code suivant
let articles = [
    "Orangina",
    "Creme Fraiche",
    "Tartiflette",
    "Emmental",
    "Bananes",
    "Chips",
    "Bieres",
    "Pizza"
];

// Votre code à partir d'ici :
//Récupération des éléments à traiter !
const listeCourses = document.getElementById("listeCourse");
const liste = document.getElementById("liste");
const nameArticle = document.getElementById("elementListe");

//Récupération des boutons !
const btnDels = document.getElementsByClassName("btnDel");
const btnAdd = document.getElementById("btnAdd");

//Initialisation de la liste
initElement();

//Ajout des articles que l'utilisateur rentre comme informations !
btnAdd.addEventListener("click", createListe);

//En dessous ce trouve toutes les fonctions !
//Fonction qui gère l'initialisation
function initElement(){
    for(let i = 0; i < articles.length; i++){
        createElement(articles[i]);
        liste.innerHTML = articles;
        del();
    }
}

//Fonction qui créer les éléments !
function createListe(event){
    event.preventDefault();
    if(nameArticle.value !== ""){
        articles.push(nameArticle.value);
        createElement(nameArticle.value);
        if(liste.innerHTML !== ""){
            liste.innerHTML = "";
        }
        liste.innerHTML += articles;
        del();
    }else{
        alert("Merci de renseigner un article !");
    }
}

//Fonction qui gère la suppresion d'un article dans la liste !
function del(){
    for(let btnDel of btnDels){
        btnDel.addEventListener("click",function (){
            if(articles.includes(this.parentElement.innerHTML.split("<")[0])){
                let idx = articles.indexOf(this.parentElement.innerHTML.split("<")[0]);
                articles.splice(idx, 1);
            }
            this.parentElement.remove();
            if(liste.innerHTML !== ""){
                liste.innerHTML = "";
            }
            liste.innerHTML += articles;
        });
    }
}

//Création des éléments de la liste !
function createElement(object){
    let create = document.createElement("li");
    create.innerHTML = object;
    let suppr = document.createElement("button");
    suppr.innerHTML = "Supprimer cet élément ?";
    suppr.style.marginLeft = "20px";
    suppr.className = "btnDel";
    create.appendChild(suppr);
    listeCourses.appendChild(create);
}

