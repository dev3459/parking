# Exo-67-JS-Fonctions-personnalisees-1

Créez une fonction qui permet de mettre à jour le texte d'un paragraphe avec le texte donné en paramètre.

        1. La fonction portera un nom au choix, soyez clair et concis !
        2. Elle prendra en paramètre l'ID d'un paragraphe ( attention, pas le paragraphe en lui même, juste l'ID )
        3. Le deuxième et dernier paramètre contiendra le texte à mettre en place
        4. La fonction devra aller chercher le paragraphe avec la fonction native qui va bien ( getElem... )
        5. La fonction devra écraser le texte existant pour y placer le texte passé en paramètre !
        
        6. Pour chaque paragraphe existant dans le fichier HTML, invoquez cette fonction, avec un texte différent !

## Théorie

Une fonction personnalisée, ou pour faire court, une fonction, se compose

    1. Du mot clé function
    2. De son nom
    3. D'un couple de parenthèses avec ou sans paramètres
    4. D'une accolade ouvrante et une fermante
    5. De votre code...
    6. Eventuellement le mot return afin de stocker un résultat en variable.
    
```javascript
// Fonction sans paramètres
function maFonction() {
    console.log("Une petite function qui met un truc dans la console");
}

maFonction(); // Invocation de la fonction, le console log aura lieu ici et partout ailleurs ou j'utilise ma fonction.



// Fonction avec paramètres
function maFonctionAvecParams(param1, param2) {
    console.log("Param1 vaut: " + param1, " Param2 vaut: " + param2);
}

maFonctionAvecParams(5, "10"); // Console log avec 5 pour param1 et "10" pour param2



// Une fonction peut retourner un résultat !
function maFonctionReturn(param1) {
    return "Param1 vaut: " + param1;
}

let phrase = maFonctionReturn("quelque chose !");
console.log(phrase); // Affichera en console: Param1 vaut: quelque chose !
```    