const content = document.getElementById('content');

function recursive(i){
    ((i += 2) < 60) ? createDiv(i) + recursive(i) : null;
}

recursive(0);

function createDiv(text){
    let create = document.createElement('div');
    create.innerHTML = text;
    content.appendChild(create);
}