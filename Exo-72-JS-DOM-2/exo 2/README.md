Consignes Exercice 2 :

I -
Cette page Web utilise des balises div afin de créer des étiquette de nom pour des informaticiens célèbres.
Dans ce défi, vous allez utiliser le JavaScript pour modifier le texte des titres h1 de ces étiquettes de nom.
Première étape : utilisez document.getElementsByTagName pour trouver tous les titres, afin de les stocker dans une variable.


II -
Maintenant que vous avez stocké les titres dans une variable,
utilisez une boucle for pour itérer dessus et mettre un texte différent ('Bonjour, je suis' par exemple).



Théorie :

Nouvelle instruction vue dans l'exercice : document.getElementByTagName('<type de balise>');

=> Permet de récuperer les éléments html correspondant au nom de balise spécifié.

Exemple : var divs = document.getElementsByTagName('div');

Va récuperer tout les éléments div de la page et les stocker dans une variable
La variable contiendra un ensemble qu'on pourra parcourir grâce à une boucle for comme un Tableau
