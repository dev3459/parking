Consignes :

    - Modifier le code existant pour afficher la longueur totale de la variable monTexte.
    - Ajouter du code pour trouver la premiere position de la lettre "i" dans ma variable
    - Afficher cette position dans l'élément ayant pour id "position"
    - Dans une variable, stocker le contenu de monTexte et transformer la chaine en majuscules.
    - Afficher le contenu de cette nouvelle variable dans l'élément ayant pour id "chaineMaj"

    - En utilisant une boucle ( for ) , parcourir la chaine , à chaque fois que la lettre "a" est trouvée, afficher
     un message d'alerte ( alert("lettre a trouvé"); )



Théorie :

    Il existe de nombreuses méthodes pour manipuler les chaines de caracteres en javascript ( string en anglais )

    Une variable contenant une chaine de caracteres dispose de ces méthodes.


    string.length
    

    Permet de connaitre la longueur d'une chaine de caracteres, c'est à dire le nombre de lettres et/ou de chiffres
    contenu dans la variable.

    **Exemple** :

    let maVariable = "Mon texte";
    let longueur = maVariable.length;

    Ma variable longueur aura pour valeur 9 car il y a 9 caracteres, les espaces sont considérés comme des caracteres.



    string.indexOf("valeur");

    Permet de connaitre l'index de départ d'une chaine de caractere dans une autre chaine.

    Exemple :

    let maVariable = "Mon texte";
    let position = maVariable.indexOf('texte');

    Ma variable position aura pour valeur 4 car le mot texte commence à l'index 4 ( 0=M,1=o,2=n,3= )


    Si la chaine n'est pas trouvée dans l'autre chaine, indexOf retournera -1

    indexOf accepte un second parametre qui définit l'index de départ où javascript commencera à chercher si la chaine est
    présente.

    Exemple :

    let maVariable = "Mon texte";
    let position = maVariable.indexOf('texte',2);

    Ici nous demandons à javascript de commencer à chercher la chaine à partir de l'index 2 soit à partir de la lettre n




    string.toUpperCase();

    Permet de transformer une chaine de caracteres pour que toutes les lettres soient en majuscules.

    Exemple :

    let monTexte = "hello world";
    let monTexte2 = monTexte.toUpperCase();

    La variable monTexte2 aura pour valeur la chaine suivante : "HELLO WORLD"


    string.toLowerCase();

    Permet de transformer une chaine de caracteres pour que toutes les lettres soient en minuscules.

    Exemple :

    let monTexte = "Hello World";
    let monTexte2 = monTexte.toLowerCase();

    La variable monTexte2 aura pour valeur la chaine suivante : "hello world"



    Il est également possible d'accéder aux éléments d'une chaine de caracteres comme on le ferrait avec un tableau

    Exemple :

    let monTexte = "mon texte est vraiment trés interessant";
    let maLettre = monTexte[0];

    maLettre aura pour valeur "m" ( comme pour les tableaux, chaque lettre dispose d'un index, ici j'accéde à l'index 0
     soit la premiere lettre de ma chaine )


     Il est également possible de parcourir une chaine compléte en utilisant un boucle

     Exemple :
     let monTexte = "mon texte est vraiment trés interessant";
     for(var i=0; i<monTexte.length; i++){
       alert(monTexte[i]);
     }


     Ici j'éxécute un alert qui affichera chaque lettre de ma chaine en utilisant la variable i de ma boucle for
     qui s'arretera à la derniere lettre de ma chaine de caractere.
