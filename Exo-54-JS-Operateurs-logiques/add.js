let x = 1, y = 4, z = -1;

if (x < 2) {
    document.getElementById('reponse').innerHTML = 'x est inférieur à 2';
}

if (y > 3) {
    document.getElementById('reponse').innerHTML = 'y est plus grand que 3';
}

if (z <= 0) {
    document.getElementById('reponse').innerHTML = 'z est plus petit ou égale à 0';
}

if (x < 2 && y > 3 && z <= 0) {
    document.getElementById('reponse').innerHTML = 'les 3 condtions sont réuni !';
}

if ((x < 2 && y > 3) || z === -1) {
    document.getElementById('reponse').innerHTML = 'soit z est égal à -1 soit x est inférieur à 2 et y est ' +
        'supérieur à 3 soit les 2 conditions sont réuni x<2 et y>3 et z===-1';
}