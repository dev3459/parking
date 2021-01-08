# EXO-17-HTML-Formulaires


### Énoncé 

Et si vous faisiez un formulaire pour saisir votre fiche d'identité ? 

Créez un formulaire dans lequel on trouvera les cases à remplir (champ en français, "input" en anglais) avec des titres. 

Votre formulaire doit contenir des champs et les titres correspondants pour : 

- le nom,
- le prénom,
- le date de naissance avec 3 inputs : un pour la date, un pour le mois (on doit le sélectionner dans une liste), un pour l'année,
- le sexe (une seule lettre maximum, "M" ou "F"),
- l'e-mail,
- l'url de votre GitHub,
- et un bouton pour envoyer le formulaire. 

Ne vous inquiétez pas de comment gérer cet envoi pour l'instant.



*Bonus 1* : Le nom, le prénom le mail et le mot de passe doivent obligatoirement être remplis. Au chargement de la page, le curseur se trouve déjà dans le champ "nom".

*Bonus 2* : Le formulaire ne sera pas pris en compte si vous n'avez pas entré un e-mail dans le champ e-mail (écrire "blabla" ne suffit pas pour envoyer le formulaire).
 

###Cours : Les formulaires

Les formulaires vont permettre à l'utilisateur de saisir des données. Les champs (ou input) peuvent être paramétrés et permettent de renseigner graâce à des attributs tout un tas d'informations, restrictions et permissions diverses.

La bonne pratique consiste en regrouper les inputs dans un élément form. Un élément permet d'étiqueter un titre à un champ. En cliquant sur ce titre, le curseur se place automatiquement dans le champ correspondant. 

Il existe aussi un élément select. Il crée un champ que l'on va remplir selon une liste déroulante qui apparait quand on clique dessus. 
L'input de type file permet quant à lui de créer un champ d'importation de fichier. On peut alors y entrer tout un tas de conditions, telles que le type de fichier, ou encore sa taille.

Les inputs de formulaires ne manquent pas d'options lisibles par le navigateur web. On verra plus tard que cela ne permet pas une protection contre les attaques de sécurité, mais offre à l'utilisateur une meilleure expérience d'utilisation. N'hésitez pas à consulter la documentation pour voir tout ce qui est possible de faire. 

