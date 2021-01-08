try{
    let div1 = document.getElementById('div1s');
    div1.innerHTML = "Bonjour l'erreur";
}catch(err){
    alert(`L'élément ${div1} n'existe pas !`);
}