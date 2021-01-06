let btnEtape1 = document.getElementById('etape1');
let myWindow;

btnEtape1.addEventListener('click', () => {
    let features = "menubar=no, scrollbars=yes, width=500, height=500, status=no, toolbar=no";
    myWindow = window.open('https://youtube.com/', '_blank', features);
});

let btnEtape2 = document.getElementById('etape2');
btnEtape2.addEventListener('click', () => {
    myWindow = window.close();
});