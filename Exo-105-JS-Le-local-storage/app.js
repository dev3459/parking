const storage = window.localStorage;
storage.setItem("size", 18);
storage.setItem("material", "cuivre");
storage.setItem("black", "Black");

function afficheTexte(){
    let result = document.getElementById('result');
    result.innerHTML += "<br>Le thème choisi est " + storage.getItem('black') + " Le type de matériel est " + storage.getItem('material') + " la police d'écriture est de " + storage.getItem('size');

    console.log('Thème : ' + storage.getItem('black') + ' Type de matériel : ' + storage.getItem('material') + 'et police de caractères ' + storage.getItem('size') + 'px');
}

afficheTexte();

storage.setItem("size", 22);
storage.setItem("material", "or");
storage.setItem("black", "blue");

afficheTexte();