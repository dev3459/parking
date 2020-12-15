# Exo-66-JS-Fonctions-natives

Vous disposez de quelques paragraphes, récupérez les a chaque fois dans une variable.

```html
<p id="entier">32</p>
<p id="flottant">54.85</p>
<p id="non-numerique">Vous y arriverez !</p>
<p id="random"></p>
<p id="trunc">54.988</p>
<p id="replace">Hello world !</p>
```

En plus des variables contenant vos éléments HTML, créez une variable **operande** qui contiendra la valeur *10*

        1. Remplacez la valeur du paragraphe #entier par sa valeur multipliée par operande
           ==> Résultat attendu: 320
        
        2. Remplacez la valeur du paragraphe #flottant par sa valeur multipliée par operande, 
           ajouter ensuite à ce résultat la nouvelle valeur contenue dans le paragraphe #entier
           ==> Résultat attendu: 868,5
        
        3.Testez si le paragraphe #non-numerique dispose d'une valeur numérique, si ce n'est pas le cas, remplacez le 
          contenu par 0 ( zéro ).     
          ==> Résultat attendu: 0
        
        4. Le paragraphe #random ne contient rien, faites en sorte qu'il contienne un nombre aléatoire compris entre 0 et 0
           ==> Résultat attendu: Nombre aléatoire 
        
        5. Le paragraphe #trunc contient un nombre flottant, faites en sorte de ne garder que la partie entière, à l'aide
           d'une fonction de l'objet Math
           ==> Résultat attendu: 54
            
        6. Le paragraphe #replace contient la valeur Hello world ! Remplacez world par votre nom et prénom !
           ==> Résultat attendu: Vous seul savez ;-)
        
          

## Théorie

Une fonction native peut être appelée en utilisant son objet, suivi d'un point ( nous verrons plus tard ce qu'est un objet, sachez juste qu'ils existent et que tout est objet en JavaScript)

```javascript
let randomNumber = Math.random();
let entier = Number.parseInt("65");
let flottant = Number.parseFloat('65.24');

// Certaines fonctions natives font exception, vous pouvez les invoquer sans faire référence à leur objet
entier = parseInt("65"); // fonctionne
flottant = parseFloat("65.24");

// Ne fonctionne pas:
randomNumber = random();
```