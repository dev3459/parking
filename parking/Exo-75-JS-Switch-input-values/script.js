let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let button = document.getElementById('switch');

let transfertInput1;
let transfertInput2;

button.addEventListener('click', function () {
    transfertInput1 = input1.value;
    transfertInput2 = input2.value;
    input1.value = transfertInput2;
    input2.value = transfertInput1;
})
