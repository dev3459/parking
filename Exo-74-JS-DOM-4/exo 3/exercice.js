let libButton = document.getElementById('lib-button');
let storyDiv = document.getElementById("story");
let txtNom = document.getElementById('nom');
let txtAdjectif = document.getElementById('adjectif');
let txtPersonnage = document.getElementById('person');



let libIt = function() {
    if(txtNom.value !== "" && txtAdjectif.value !== "" && txtPersonnage.value !== "") {
        let phraseRdm = Math.trunc(Math.random() * 4);

        if(phraseRdm === 1){
            storyDiv.innerHTML = "Le jour du " + txtNom.value + " arrive il faut aller chez " + txtPersonnage.value + " il sera trouvé la " + txtAdjectif.value;
        }else if(phraseRdm === 2){
            storyDiv.innerHTML = "Alerte alerte " + txtPersonnage.value + " c'est " + txtAdjectif.value + " il a fait grâce " + txtNom.value;
        }else if(phraseRdm === 3){
            storyDiv.innerHTML = "C'est la " + txtNom.value + " il faut " + txtAdjectif.value + " avec " + txtPersonnage.value;
        }
    }else {
        storyDiv.innerHTML = "Merci de renseigner tout les champs !";
    }
};

libButton.addEventListener('click', libIt);