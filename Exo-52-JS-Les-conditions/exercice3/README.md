Exercice 3 :

    - Creer deux variables : x et y
    - Créer une condition qui vérifie que x est strictement = à y
    - Créer un bloc else qui éxécute le code de votre choix
    - Tester dans le navigateur, faire en sorte que x ait la même valeur que y
    - Ajouter une instruction permettant d'incrémenter x de 3 puis tester le résultat dans le navigateur


Théorie :

    En javascript, l'instruction if permet de verifier une condition et d'éxécuter le code correspondant si la condition
    est réalisée ( une condition est un boolean, elle vaux : true ou false )

    l'instruction if s'écrit toujours en minuscule ( TOUJOURS !!!! )


    Exemple :

    if (maVariable < 10) {
        document.getElementById('test').innerHTML = "mon texte";
    }

    Dans cet exemple, si la variable maVariable est strictement inférieure à 10 , le code sera éxécuté, sinon il sera
    ignoré.


    A la suite de l'instruction if, l'instruction else vous permet d'éxécuter du code si la condition vérifiée n'est pas
    validée.

    Exemple :


    if (maVariable < 10) {
            document.getElementById('test').innerHTML = "mon texte";
    }
    else
    {
            document.getElementById('test').innerHTML = "mon autre texte";
    }

    Dans cet exemple, si la variable maVariable vaux 9, mon élément html ayant pour ID 'test' aura comme texte "mon texte"
    Si la variable maVariable était égale à 11, le bloc de code délimité par l'intruction else serait éxécuté, mon élément
    html aurait comme texte "mon autre texte"













