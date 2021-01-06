# Exo-107-JS-Les-datasets

Les différents éléments HTML on déjà été récupérés pour vous dans le fichier JavaScript.

## Elements de #p1 à #p4  
Directement **dans le code HTML**, ajoutez pour chaque élément un dataset correspondant à l'innerHTML que j'ai placé.

Le nom de l'attribut dataset est à votre convenance, exemple:
````html
        <p id="p1" data-......="5">Depuis HTML - Dataset représentant un nombre</p>
        ...
````
Récupérez la valeur de **chaque dataset dans une variable** et réaliser les actions suivantes :

    #p1. En JS, ajoutez 10 à la valeur récupérée et mettez à jour le dataset de l'élément en JS aussi.
    #p2. En JS, mettez à jour la valeur du dataset avec la longeur de la chaine récupérée ( mettez dans le dataset la longueur totale de la chaîne de caractères )
    #p3. En JS, transformez le variable contenant la valeur du dataset en tableau, et insérez ce tableau dans le innerHTML de l'élément #p3
    #p4. En JS, Testez si la valeur est true, si c'est le cas, indiquez "La valeur est vraie" dans le innerHtml de l'élément #p4, si ce n'est pas le cas, indiquer l'inverse.

## Elements de #p5 à #p8

Recréez exactement ce que vous avez fait dans le code HTML, mais cette vois ci, via JavaScript, reproduisez également les mêmes opérations sur chaque dataset.

Théorie:

En JavaScript, les datasets peuvent également être ajoutés directement à partir du code, comme ceci: 
````javascript
/**
 * Exemple de création de datasets en JavaScript.
 */
let paragraphe = document.getElementById('monParagraphe');
// Ne sera pas visible dans la console dev, mais fonctionne.
paragraphe.dataset.exemple = '42';
console.log(paragraphe.dataset.exemple);

// Ne sera pas non plus visible en console, mais fonctionnera aussi.
paragraphe.setAttribute('data-exemple2', 'Simple test');
console.log(paragraphe.dataset.exemple2);
````


## Bonus

1. Créez un nouvel élément en JavaScript.
2. Créez un objet littéral utilisateur contenant les propriétés nom, prenom avec des valeurs ( Doe en nom et John en prénom par exemple )
3. Trouvez une solution pour placer cet objet dans un dataset à partir de JS.