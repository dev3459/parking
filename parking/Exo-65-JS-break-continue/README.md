# Exo-65-JS-break-continue

Vous avez à votre disposition un fichier HTML prêt à l'emploi, le fichier JS a déjà été créé et est déjà lié.

1. A l'aide de la fonction **getElementsByClassName()**, récupérez tous les paragraphes.

2. A l'aide d'une boucle FOR de 0 à la longueur de la collection, affichez dans le paragraphe d'index **i** ( position ) la valeur de **i + 1** ( variable de boucle )

Le but est d'obtenir pour chaque paragraphe son numéro d'apparition dans le code HTML.

3. A l'aide de break, sortez de la boucle si **i** est égal à la longeur de la collection des éléments - 1 ( donc 4, mais vous devez utiliser la propriété de longueur )

4. A l'aide de **continue** et l'opérateur qui va bien, faites de ne pas afficher le texte que vous avez ajouter lorsque **i + 1** vaut un nombre pair !

## Théorie

Pour récupérer vos éléments, vous pouvez utiliser 

```javascript 1.8
let elements = document.getElementsByClassName('maClasse');
```

Dans une boucle, vous pouvez parcourir les différents éléments récupérés à l'aide de la propriété length.

Pour accéder à un élément en particulier, vous pouvez utiliser des crochets !

```javascript
let i = 0;
while(i < elements.length) { // length contient la longueur de la collection d'éléments.
    let element = elements[i]; // Récupère l'élément à l'index i, qui chage à chaque tour de boucle.
    element.innerHTML = "La variable i vaut: " + i;
    i++;
}
```