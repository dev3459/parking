Consignes :

Compléter le code du fichier exercice1.js pour créer une instruction switch qui affichera une boite d'alerte affichant
 "hello" si la variable fruits vaux "banana" et "welcome" si fruits vaux "apple"


 Théorie :

 L'instruction switch permet d'éxécuter des blocs de code si une variable remplie une des conditions.

 on l'utilise de cette façon :

 switch(variable ou expression)
 {
    case"valeur1":
        //Votre code ici
        break;
    case"valeur2":
        //Votre code ici
        break;
    default:
        //votre code ici
 }




le mot clef case est utilisé pour tester si une valeur est présente et executer le code correspondant ( entre case et break )
le mot clef default est utilisé das le cas où aucune autres conditions n'est remplie


Il est possible d'associer plusieurs case par bloc conditionel, exemple :

switch (new Date().getDay()) {
    case 4:
    case 5:
        text = "Soon it is Weekend";
        break;
    case 0:
    case 6:
        text = "It is Weekend";
        break;
    default:
        text = "Looking forward to the Weekend";
}