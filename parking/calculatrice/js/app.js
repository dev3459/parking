let opes = document.getElementsByClassName("operation");
let result = document.getElementById("resultat"); 
const toucheCopier = document.getElementById("copy");

//Évènement copier dans le presse papier
toucheCopier.addEventListener("click", function (){
    let range = document.createRange();
    
    range.selectNode(result);
    window.getSelection().addRange(range);
    try{
        if(document.execCommand('copy')){
            alert("Copie réussi !");
        }
        window.getSelection().removeAllRanges();
    }catch (error){
        alert("Erreur la copie n'a pas pu ce faire !");
    }
});

//Évènement clic sur les opérations et fonction de la calculatrice !
for(let ope of opes){
    ope.addEventListener("click", function (){ 
        ope.innerHTML === "C" ? result.innerHTML = "0" : 
        ope.innerHTML === "=" ? result.innerHTML = eval(result.innerHTML) :
        result.innerHTML === "0" ? result.innerHTML = ope.innerHTML : 
        result.innerHTML += ope.innerHTML ;
    }); 
}