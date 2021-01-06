let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */

let affichage = texte => {
    let create = document.createElement('p');
    create.innerHTML = texte;
    document.body.append(create);
}

let exposant = tableauUn.map(item => item ** item);
affichage(exposant);

let multParDix = tableauUn.map(item => item * 10);
affichage(multParDix);

let addDeuxDivisAge = tableauUn.map(item => (item + 2) / 22);
affichage(addDeuxDivisAge);

let plusGrandQueDeux = tableauUn.filter(item => item > 2);
affichage(plusGrandQueDeux); 

let modulo = tableauUn.filter(item => !(item % 2));
affichage(modulo);

let multParTrois = tableauUn.filter(item => (item * 3) > 10);
affichage(multParTrois);

let valLength = tableauDeux.map(item => item = item.length);
affichage(valLength);

let phrase = tableauDeux.map(item => item = "La " + item + " à une longueur de " + item.length + "<br>");
affichage(phrase);

let concat = tableauDeux.map(item => item = item + item + "<br>");
affichage(concat);

let lengthPlusQueDeux = tableauDeux.filter(item => item.length > 2);
affichage(lengthPlusQueDeux);

let divisParDeux = tableauDeux.filter(item => !(item.length % 2));
affichage(divisParDeux);

let moinsTrois = tableauDeux.filter(item => (item.length - 3) > 10);
affichage(moinsTrois);