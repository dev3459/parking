//Création de l'objet Personne !
let Personne = function(nom,prenom,age,sexe){
    //Définition des variables !
    this.name = nom;
    this.firstName = prenom;
    this.age = age;
    this.sexe = sexe;

    //GETTER
    this.getAllParams = function(){
        return [this.name, this.firstName, this.age, this.sexe];
    }
    this.getNameAndFirstName = function(){
        return this.name + " " + this.firstName;
    }
    this.getName = function() {
        return this.name;
    }
    this.getFirstName = function(){
        return this.firstName;
    }
    this.getAge = function() {
        return this.age;
    }
    this.getSexe = function(){
        return this.sexe;
    }
    this.getAgeAndSexe = function(){
        return this.age + " " + this.sexe;
    }

    //SETTER
    this.setFirstName = function(firstName){
        this.firstName = firstName;
    }
    this.setName = function(name){
        this.name = name;
    }
};

//Fonction qui créer les divs !
function createDiv(id,parent,HTML){
    let createDiv = document.createElement('div');
    createDiv.id = id;
    createDiv.innerHTML = HTML;
    parent.appendChild(createDiv);
}

let perso1 = new Personne("gibert", "gaetan", "22", "homme");
let perso2 = new Personne("baroteaux", "maxime", "18", "homme");

function initPerso1(){
    createDiv("perso1", document.body, null);
    let element = document.getElementById('perso1');
    
    createDiv("p1", element, "Votre prénom : " + perso1.firstName);
    createDiv("p2", element, "Votre nom : " + perso1.name);
    createDiv("p3", element, "Votre sexe : " + perso1.sexe);
    createDiv("p4", element, "Votre âge : ", perso1.age);
    
    createDiv("m1", element, "Votre nom et prénom : " + perso1.getNameAndFirstName());
    createDiv("m2", element, "Votre age et sexe : " + perso1.getAgeAndSexe());
}

function initPerso2(){
    createDiv("perso2", document.body, null);
    let element = document.getElementById('perso2');
    
    createDiv("p1", element, "Votre prénom : " + perso2.firstName);
    createDiv("p2", element, "Votre nom : " + perso2.name);
    createDiv("p3", element, "Votre sexe : " + perso2.sexe);
    createDiv("p4", element, "Votre âge : ", perso2.age);
    
    createDiv("m1", element, "Votre nom et prénom : " + perso2.getNameAndFirstName());
    createDiv("m2", element, "Votre age et sexe : " + perso2.getAgeAndSexe());
}

function deletePerso(perso){
    document.getElementById(perso).remove();
}

initPerso1();
initPerso2();

perso2.setFirstName("D");
perso2.setName("O");

deletePerso("perso2");

initPerso2();