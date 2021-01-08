let paraph = document.getElementsByTagName('p');

for (let i = 0; i < paraph.length; i++) {
    paraph[i].style.color = 'red';
    paraph[i].style.width = '20%';
}

let spann = document.getElementsByClassName('spanTest');

for (let i = 0; i < spann.length; i++) {
    spann[i].style.backgroundColor = 'black';
    spann[i].style.color = 'white';
}

let animation = document.getElementById('test');

animation.style.animation = 'anim 50s linear infinite';

let dernier = document.getElementById('dernierParaph');

dernier.innerHTML = "Bonjour ce message à était changé par le JS";