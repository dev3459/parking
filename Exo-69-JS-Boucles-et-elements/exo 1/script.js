let listeCommissions = document.getElementById('liste-commissions');
let list = document.getElementById('liste');
let error = document.getElementById('erreur');
let btn = document.getElementById('submit');
let btnDelete = document.getElementById('submitDelete');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (list.value === "") {
        error.innerHTML = "Merci de renseigner le champ liste !";
    } else {
        listeCommissions.innerHTML += "<li>" + list.value.toString() + "</li>\n";
    }
});

btnDelete.addEventListener('click', function (e) {
    e.preventDefault();
    let li = document.getElementsByTagName('li');
    let liCount = li.length;
    let dernierLi = li[liCount - 1];
    dernierLi.innerHTML = dernierLi.remove();
});
