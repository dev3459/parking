let monDiv = document.createElement('div');
monDiv.innerHTML = "Ce div a été ajouté en utilisant JavaScript";

document.getElementById('viewport').appendChild(monDiv);

let divCreate = document.createElement('div');
divCreate.style.backgroundColor = 'red';
divCreate.style.width = '100px';
divCreate.style.height = '100px';
document.getElementById('viewport').appendChild(divCreate);

document.getElementById('aSupprimer').remove();







