let elements = document.getElementsByTagName('p');

function rdm() {
    return Math.trunc(Math.random() * (100 + 1));
}

for (let i=0; i < elements.length; i++) {
    elements.item(i).innerHTML = rdm().toString();
}