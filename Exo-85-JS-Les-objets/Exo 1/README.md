Exercice 1 :

    - Utiliser la méthode alert pour afficher la propriété "nom" de notre objet "personne"


Théorie :

    En javascript, un objet est une variable disposant de propriétés et de méthodes.

    Les propriétés ont des valeurs spécifiques.

    Les méthodes sont des fonctions associées à l'objet


    Exemple concret :

    Dans la vie de tout les jours, nous utilisons des objets, par exemple une voiture, elle dispose de propriétés et de
    méthodes.

    Une voiture a une couleur, un poids, une vitesse maximale, un constructeur , un nom etc...

    Une voiture a également des méthodes : démarrer , arreter, freiner etc...


    Toutes les voitures ont les mêmes propriétés et les mêmes méthodes, mais les valeurs peuvent différer d'une voiture à une autre
    ( pas le meme nom, pas la même couleur


    Exemple d'objet en javascript :

    var voiture = {constructeur : "Peugeot", model : "206", couleur : "grise"};

    Nous avons créé un objet javascript qui décrit précisement notre voiture, ici une Peugeot 206 grise

    Dans notre script, nous pouvons accéder aux propriétés de l'objet voiture de cette façon :

    voiture.couleur

    OU

    voiture["couleur"]


    Notre objet voiture peut également avoir une ou plusieurs méthodes sous forme de fonction javascript :

    var voiture = {constructeur : "Peugeot", model : "206", couleur : "grise", start : function() { //MON CODE... } };


    On pourra éxécuter notre méthode "start" de cette façon :

    voiture.start();


