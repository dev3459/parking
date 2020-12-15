let main = document.getElementById('main');
main.id = "main2";
main.style.display = "none";
main.innerHTML = "Mon nouveau texte !";

let html = main.innerHTML;

alert(html);

if(html) {
    console.log(html);
}else{
    let test = document.getElementById('test');
    test.innerHTML = "echec";

    if(test) {
        alert(test.innerHTML);
    }
}

main.style.display = "block";