for(var i=0; i <= 35; i++) {
    let texte = document.getElementById('capitaine');
    texte.innerHTML = "Le capitaine a " + i + " ans";
    console.log(texte.innerHTML);
    if (i < 18){
        texte.innerHTML += ", le capitaine est jeune !";
    }else if (i >= 18 && i < 50){
        texte.innerHTML += ", le capitaine n'est pas très vieux";
    }else if (i >= 50) {
        texte.innerHTML += ", le capitaine est vieux";
    }
}