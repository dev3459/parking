# Exo-11-HTML-Carte-visite-V1

La fiche d'identité

### Énoncé 

Vous allez réaliser votre fiche d'identité. Elle aura pour titre votre nom et votre prénom. 
Ajoutez-y votre photo ou un avatar de votre choix. 
Votre fiche devra comporter aussi votre âge, votre sexe, votre e-mail ainsi qu'un lien vers votre compte GitHub, et enfin, une liste de vos passions.


*Bonus 1* : Mettez votre photo à droite des autres informations. <br>
*Bonus 2* : Votre nom et votre prénom figurent au centre de la page. <br>
*Bonus 3* : On peut cliquer sur votre e-mail pour vous envoyer un.... e-mail.

### Cours : Les éléments HTML

Une page HTML est composé d'éléments (on en a déjà vu quelque-uns) qui vont pouvoir s'emboiter, se compiler, et bien d'autres choses.

Un élément va avoir deux balises, une entrante et une fermante, ainsi que son contenu entre celles-ci.

Un balise est un code qui va définir l'élément entouré de chevrons "<" et ">". La balise fermante quand à elle est identique, à la seule différence q'un "/" figure avant le nom de la balise. 


##### Exemple

`<p>Ceci est un paragraphe.</p>`
<br>

De rares éléments n'ont pas de balise fermante, comme `<img>`.

#### Comportement des éléments

Certains éléments ont des rôles et des comportements déterminés. Un lien se met dans une balise `<a>`. Les titres vont se mettre dans des balises qui vont de `<h1>` à `<h6>`. Le h signifie "Heading".
Certains éléments vont enfin se comporter de certaines manières. Certains vont s'aligner de façon horizontale, on dit qu'ils ont un affichage ("display") inline. 
D'autres vont s'empiler verticalement, on parle alors d'un display en "block".

Des balises inline : span, a 

#### Les attributs

Les attributs permettent de donner des propriétés et des caractéristiques à des éléments. 
Par exemple, l'élément a qui permet de créer un lien va contenir un attribut "href" qui va informer de l'adresse vers laquelle le lien dirige.

Les attributs s'écrivent dans la balise entrante : 
`<a href="https://www.google.com">Ceci est un lien vers Google. </a> `

Il existe une multitude d'attributs qui s'appliquent à tous les éléments ou à certains uniquement, n'hésitez pas à vous renseigner sur ceux-ci. 
