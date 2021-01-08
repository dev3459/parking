let div = document.getElementById('div');
let btnAlert = document.getElementById('alert');
let somme = document.getElementById('somme');

btnAlert.addEventListener('click', () => alert('Hello World !'));
somme.addEventListener('click', () => {
        let createDiv = document.createElement('div');
        createDiv.innerHTML = 5 + 6;
        div.appendChild(createDiv);
    }
);