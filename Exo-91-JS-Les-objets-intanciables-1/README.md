# Exo-91-JS-Les-objets-intanciables-1

## Côté JS.
1. Créez un objet **Personne** à l'aide d'une fonction constructeur.
2. Ajoutez des propriétés, par exemple : nom, prenom, âge, sexe...
3. Créez au moins deux méthodes, elles porteront le nom de votre choix.
4. La **première méthode** doit retourner un texte contenant toutes les propriétés que vous avez définies
   Exemple : "Ma personne s'appelle nom prenom, elle a âge et est de sexe sexe".
5. La **deuxième méthode** doit modifier deux propriétés de l'objet Personne.  

## Côté HTML.
1. Créez deux div principales ( #perso1 et #perso2 )
2. Créez dans chaque div autant de div que vous avez de membres dans votre objet
   Exemple: 
   ```html
        <div id="perso1">
            <div class="propriete1"></div>
            <div class="propriete2"></div>
            <div class="propriete3"></div>
            <div class="propriete4"></div>
            ...
            <div class="method1"></div>
            <div class="method2"></div>
        </div>
    ```
   
## De retour sur votre code JavaScript
1. A l'aide de votre fonction constructeur, créez deux **Personne**
2. Dans le div #perso1, placez chaque valeur de propriété dans les div prévus à cet effet.
3. Pareil pour le perso 2
4. Dans les deux derniers divs:
    - Le premier doit contenir le résultat de la première méthode ( pour les deux objets instanciés )
    - Invoquez la fonction permettant de mettre à jour vos deux propriétés.
    - Invoquez à nouveau la première méthode dans le dernier div.