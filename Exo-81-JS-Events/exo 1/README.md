Exercice 1 :

    - Modifier le code javascript pour écouter le click sur l'élément "clquezmoi"


Théorie :

    En javascript, un event ( événement en français ) permet d'éxécuter du code spécifique lorsque l'utilisateur effectue
    une action sur un élément de notre page ou sur la page en elle même.

    Il est possible d'ajouter des événements directement sur l'élément html via un attribut spécifique (
    exemple : <p onclick="maFonction()"> executera la fonction maFonction lorsque l'utilisateur clique sur l'élément.


    Nous intégrerons les event directement dans notre fichier js et non sur la page html car c'est une mauvaise pratique.

    Exemples :

    HTML : <div id="test"></div>
    JS : document.getElementById('test').onclick = function() {
     //Mon code javascript
    };

    Ou

    JS : document.getElementById('test').onclick = maFunction;

    function maFunction()
    {
    alert('test');
    }


    Ces exemples sont fonctionnels mais il est préférable d'utiliser la méthode addEventListener qui offre plus de possibilités
    de personnalisation et qui n'écrase pas des gestionnaires d'événements déjà mis en place.

    Exemple :

    document.getElementById('test').addEventListener('click', function() {
        //Mon code Javascript
    }

    OU

    document.getElementById('test').addEventListener('click', maFunction);



    Quelques exemples d'événements fréquemment utilisés

    click 	    L'utilisateur clique sur un élément html
    mouseover   L'utilisateur déplace le pointeur au dessus d'un élément html
    mouseout 	L'utilisateur déplace le pointeur en dehors d'un élément html
    keydown 	L'utilisateur presse une touche du clavier


    Une liste de tout les événements se trouve sur ce site : https://developer.mozilla.org/fr/docs/Web/Events
