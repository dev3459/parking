//Déclaration d'une boucle limité à 100
for (let i = 0; i < 100; i++) {
    let phrase;

    verification();
    console.log(phrase);

    //Déclaration d'une fonction de condition pour vérifier si la variable i est un mutiple de 3 ou de 5 ou autre
    function verification(){
        i % 3 === 0 && i % 5 === 0 ? phrase = "fizz buzz" :
            i % 5 === 0 ? phrase = "fizz" :
                i % 3 === 0 ? phrase = "buzz" :
                    phrase = i;
    }
}