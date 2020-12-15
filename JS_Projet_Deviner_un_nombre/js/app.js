//Déclaration des variables !
let inputUser = document.getElementById("textDeviner");
let boutton = document.getElementById("btnSubmit");
let btnRecommencer = document.getElementById("btnRecommencer");

let nbrRestant = document.getElementById("chiffreRestant");
let nbrEssai = document.getElementById("nbrEssai");

let message = document.getElementById("message");

let randomisation = Math.trunc(Math.random() * 100);


//Fonction du bouton click à chaque essai de l'utilisateur
boutton.addEventListener("click", function (event){
   event.preventDefault();
   if(nbrRestant.innerHTML > 1) {
       if(inputUser.value !== ""){
           //Vérification que l'input soit bien du texte ! + Vérification si le chiffre et le même que celui généré !
           if(!isNaN(parseInt(inputUser.value))){
               if(parseInt(inputUser.value) === parseInt(randomisation)){
                   message.innerHTML = "Bravo vous avez trouvé le nombre " + inputUser.innerHTML + ".";
                   btnRecommencer.style.display = "block";
                   boutton.style.display = "none";
                   btnRecommencer.focus();
               }else if(parseInt(inputUser.value) !== parseInt(randomisation)){
                   nbrRestant.innerHTML--;
                   nbrEssai.value += inputUser.value + " | ";
                   if(inputUser.value < parseInt(randomisation)){
                       message.innerHTML = inputUser.value + " est plus petit que le bon nombre !";
                       message.style.backgroundColor = "black";
                       message.style.color = "white";
                   }else if(inputUser.value > parseInt(randomisation)){
                       message.innerHTML = inputUser.value + " est plus grand que le bon nombre !";
                       message.style.backgroundColor = "black";
                       message.style.color = "white";
                   }
                   inputUser.value = "";
                   inputUser.focus();
               }
           }else{
               message.innerHTML = "Merci de renseigner des chifffres !";
               message.style.backgroundColor = "white";
               message.style.color = "red";
               inputUser.focus();
           }
       }else{
           message.innerHTML = "Merci de renseigner les champs !";
           message.style.backgroundColor = "white";
           message.style.color = "red";
           inputUser.focus();
       }
   }else{
       message.innerHTML = "Échec de la partie  ! Le bon nombre était : " + randomisation;
       message.style.backgroundColor = "white";
       message.style.color = "red";
       btnRecommencer.style.display = "block";
       boutton.style.display = "none";
       btnRecommencer.focus();
   }
});

//Fonction pour rejouer !
btnRecommencer.addEventListener("click", function (event){
    event.preventDefault();
    randomisation = Math.trunc(Math.random() * 100);
    nbrEssai.value = "";
    nbrRestant.innerHTML = parseInt(10);
    inputUser.value = "";
    message.innerHTML = "Le jeu de la devinette !";
    message.style.backgroundColor = "initial";
    message.style.color = "#2d78e0";
    btnRecommencer.style.display = "none";
    boutton.style.display = "block"
});