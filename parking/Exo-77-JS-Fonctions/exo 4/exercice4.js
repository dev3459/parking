/* Ecrire ci dessous une fonction permettant d'ajouter du texte dans le div appelé container */
function createText(text) {
    let div1 = document.getElementById('container');
    div1.innerHTML = text;
}

/* Appeler la fonction */
createText("bonjour");