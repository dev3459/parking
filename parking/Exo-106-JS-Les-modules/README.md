# Exo-106-JS-Les-modules
Le fichier qui contiendra votre module est HTML.js, le fichier qui l'utilisera est app.js

1. Liez correctement vos modules dans le fichier HTML.
2. Créez un module vous permettant de faciliter la création d'éléments HTML, le module doit contenir:

        1. Une fonction qui crée et retourne un div ==> createDiv(vos paramètres)
        2. Une fonction qui crée et retourne un champs input, le type devra pouvoir être choisi ==> createInput(vos paramètres)
        3. Une fonction qui crée et retourne un label ==> createLabel(vos paramètres)

        Attention, TOUT doit être défini dans les fonctions:
            1. Le texte du innerHTML ou du textContent
            2. Le type ( pour l'input )
            3. La value ( pour l'input )
            4. La classe CSS à utiliser pour l'élément ( non obligatoire, uniquement si vous utilisez du CSS ).

        Attention 2: Retournez les éléments créés, mais ne les ajoutez pas au DOM ( pas de document.getElem..().append() dans le module )

3. Importez toutes vos fonctions dans le fichier app.js

        1. Utilisez la fonction createDiv pour créer un nouveau div.
        2. Ajoutez l'élément récupéré à l'élément #result.

        3. Utilisez la fonction createLabel pour créer un nouvel label avec le texte E-mail:.
        4. Ajoutez l'élément récupéré à l'élément #result.

        5. Utilisez la fonction createInput pour créer un nouvel input de type email.
        6. Ajoutez l'élément récupéré à l'élément #result.

        7. Utilisez la fonction createLabel pour créer un nouvel label avec le texte Password:.
        8. Ajoutez l'élément récupéré à l'élément #result.
   
        9. Utilisez la fonction createInput pour créer un nouvel input de type password.
        10. Ajoutez l'élément récupéré à l'élément #result.

        