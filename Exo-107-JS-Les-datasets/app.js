// Elements pour lesquels vous créerez des datasets directement dans le code HTML.
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');

//Récupération des datasets dans des variables
let numberData = p1.dataset.number;
let stringData = p2.dataset.string;
let arrayData = p3.dataset.array;
let booleanData = p4.dataset.boolean;

p1.dataset.number = (parseInt(numberData) + 10).toString();
p1.innerHTML += " = " + p1.dataset.number;

p2.dataset.string = stringData.length;
p2.innerHTML += " = " + p2.dataset.string;

let dataArrays = arrayData.split('|');
for(let dataArray of dataArrays){
    p3.innerHTML += " = " + dataArray.trim();
}

booleanData = booleanData.toLowerCase() === 'true';
if(booleanData){
    p4.innerHTML = "La valeur est true";
}else{
    p4.innerHTML = "La valeur est false";
}




// Elements pour lesquels vous créerez des datasets depuis JavaScript.
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let p7 = document.getElementById('p7');
let p8 = document.getElementById('p8');

p5.setAttribute('data-number', '18');
p6.setAttribute('data-string', 'bonjour');
p7.setAttribute('data-array','bonjour|salut|hey');
p8.setAttribute('data-boolean','false');

p5.dataset.number = (parseInt(numberData) + 10).toString();
p5.innerHTML += " = " + p5.dataset.number;

p6.dataset.string = stringData.length;
p6.innerHTML += " = " + p6.dataset.string;

for(let dataArray of dataArrays){
    p7.innerHTML += " = " + dataArray.trim();
}

if(booleanData){
    p8.innerHTML = "La valeur est true";
}else{
    p8.innerHTML = "La valeur est false";
}