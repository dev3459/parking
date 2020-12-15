Consignes :

    - Compléter le code pour créer un nouveau div en utilisant javascript
    - Ajouter du code pour que le div créé contienne le texte suivant "Ce div a été ajouté en utilisant javascript"
    - Créer un second div puis l'intégrer au div "viewport"
    - Définir la couleur de fond de ce nouveau div en rouge
    - Modifier l'attribut style.width et style.height pour que ce div fasse 100px sur 100px
    - Supprimer l'élément ayant pour id "aSupprimer"


Théorie :

    Précédemment, nous avons vu une méthode trés utilisée de l'objet document : getElementById

    L'objet document dispose d'autres méthodes permettant de créer/supprimer des éléments html :


    document.createElement(<element>)

    Cette méthode permet de créer un nouvel élément html, exemple :

    var element = document.createElement('div');

    La variable element contient désormais un div créé grâce à javascript, mais il faut désormais l'inclure à notre page
    html ...


    <element>.appendChild(element);

    Cette méthode permet d'ajouter un élément créé grâce à js dans un autre élément html, exemple :

    document.getElementById('viewport').appendChild(element);

    Mon div créé précédemment et plaçé dans la variable "element" va être intégré dans mon élément html appelé "viewport"
    Ce nouvel élément est désormais un noeud enfant de l'élément viewport


    <element>.removeChild(element);

    Cette méthode permet de supprimer un élément contenu dans un autre élément html, exemple :

    document.getElementById('viewport').removeChild(element);

    Dans cet exemple, je supprime mon élément "div" contenu dans l'élément "viewport"


    Lorsqu'un élément est créé en utilisant javascript, je peux utiliser toutes les méthodes habituelles sur des éléments
    déjà présent dans la page :

    element.innerHTML = "<conenuHTML>"
    element.id = "<nouvelID>"
    element.style

    etc...




