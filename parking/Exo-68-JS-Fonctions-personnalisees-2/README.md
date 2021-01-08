# Exo-68-JS-Fonctions-personnalisees-2

        1. Récupérez tous les éléments dans une variable ( getElementsByTagsName par exemple )
        2. Créez une fonction qui aura pour seul objectif de créer un nombre aléatoire compris entre 0 et 100
        3. Placez, grâce à une boucle, un nombre aléatoire dans le innerHTML de chaque élément récupéré 
           ( la boucle ne fait pas partie de la fonction ! )


## Théorie

**Math.random()** vous donne un nombre aléatoire compris entre 0 et 1. Pour obtenir un nombre aléatoire entre 0 et un **max** 
maximum, il vous suffit de multiplier le nombre aléatoire par **max** avant de le tronquer !

Exemple ( le nom des fonctions ont **volontairement** été modifiés ) :
```javascript
    // Nombre aléatoire compris entre 0 ( inclus ) et 100 ( exclus )
    let random = ceil(random) * 100;
    
    // Nombre aléatoire compris entre 1 ( inclus ) et 100 ( exclus )
    let random = trunc(random * (100 - 1) + 1);

    // Nombre aléatoire compris entre 1 ( inclus ) et 100 ( inclus )
    let random = floor(random * (100 - 1 + 1)) + 1;
```