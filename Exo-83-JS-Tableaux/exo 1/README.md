Exercice 1 :

    - Stocker dans la variable x la deuxieme entrée du tableau
    - Afficher dans le div "viewport" la variable x


Théorie :

    En javascript, les tableaux sont utilisés pour stocker de nombreuses valeurs dans une seule variable.

    On crée un tableau de cette façon :

    var tableau = ["element1","pomme","poire","salade","etc"];


    Pour accéder aux éléments d'un tableau, on utilise l'index de l'élément auquel on souhaite accéder, l'index commence
    à 0.

    Pour accéder à la valeur "pomme" de mon tableau, j'utiliserais :

    var valeur = tableau[1];



    Il est également possible de modifier l'entrée d'un tableau en utilisant son index, par exemple :

    tableau[0] = "foo";

    Mon tableau aura désormais les valeurs suivantes : ["foo","pomme","poire","salade","etc"]



   Il existe des méthodes natives de javascript concernant les tableaux :

   length : retourne la taille du tableau

   Exemple : var taille = tableau.length;
   La variable taille vaudra 5 var mon tableau a 5 valeurs ( foo,pomme,poire,salade et etc ).


   Il est ainsi possible d'accéder à la derniere entrée d'un tableau en utilisant length-1, exemple :

   var dernier = tableau[tableau.length-1];

   la variable dernier vaudra "etc"


   On utilisera également length dans une boucle pour parcourir tout les éléments d'un tableau
   Exemple :

   var tableau = ["element1","pomme","poire","salade","etc"];
   var taille = tableau.length;

   for(var i=0; i<taille; i++)
   {
   alert(tableau[i]);
   }



   Il est possible d'ajouter un élément à notre tableau en utilisant l'instruction "push"
   Exemple :
   var tableau = ["element1","pomme","poire","salade","etc"];
   tableau.push("cerise");

   Mon tableau aura désormais pour valeurs :  ["element1","pomme","poire","salade","etc","cerise"];

   Note : push ajoute toujours l'élément à la fin du tableau.




