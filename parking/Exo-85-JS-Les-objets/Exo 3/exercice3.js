let personne = {
    "prenom" : "James",
    "nom" : "Bond",
    "nomDeCode" : "007"
};

/* Afficher ci dessous "mon nom est <propriété nom de notre objet>, <propriété prenom de notre objet>
 <propriété nom de notre objet>, agent <propriété nomDeCode de notre objet>" dans un alert */

alert("Mon nom est " + personne.nom + "," + personne.prenom + ", agent " + personne.nomDeCode);