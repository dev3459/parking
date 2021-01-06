let dossierHTML = "Exo-4-HTML-Introduction|Exo-5-HTML-Attributs|Exo-6-HTML-Listes-non-ordonnees|Exo-7-HTML-Listes-ordonnees|Exo-8-HTML-Listes-ordonnees|Exo-9-HTML-Listes-ordonnees|Exo-10-HTML-headings|Exo-11-HTML-Carte-visite-V1|Exo-12-HTML-Div|Exo-13-HTML-balises-texte|Exo-14-HTML-balises-all|Exo-15-HTML-Page-de-blog|Exo-16-HTML-Tableaux|EXO-17-HTML-Formulaires|Exo-18-HTML-Tableaux-indentation|";

let dossierCSS = "Exo-19-Les-tableaux-mon-choix|Exo-20-Blog-de-recettes|Exo-21-Les-formulaires|Exo-22-CSS-Carte-de-visite-V2|Exo-23-CSS-Styles|Exo-24-CSS-Styles|Exo-25-CSS-backgrounds|Exo-26-CSS-Tailles|Exo-27-CSS-Les-tableaux|Exo-28-CSS-Recapitulatif|Exo-29-CSS-CV|Exo-30-CSS-Nintendo|Exo-31-CSS-Menu-Apple|Exo-32-Soft-Like-Cotton|Exo-33-Plan-de-table|Exo-34-CSS-Carte-postale|Exo-36-CSS-Balises-structurantes|Exo-38-CSS-Table-color|Exo-39-CSS-Mesures|Exo-40-CSS-Responsive|Exo-41-CSS-Les-transitions|Exo-42-CSS-Transformations|Exo-43-CSS-Menu-preparation-a-flex|Exo-44-CSS-Les-animations|Exo-45-CSS-Menu-deroulant|Exo-46-CSS-Menu-mobile-Flex|Exo-47-CSS-Animations|Exo-48-CSS-Flexbox|Exo-49-JS-Hello-World|Eval-Front";

let dossierJS = "Exo-50-JS-Les-bases-variables|Exo-51-JS-Les-operations|Exo-52-JS-Les-conditions|Exo-53-Introduction-au-DOM|Exo-54-JS-Operateurs-logiques|Exo-55-JS-Operateur-ternaire|Exo-56-JS-Switch|Exo-57-JS-Bases|Exo-58-JS-Switch|Exo-59-JS-Compte-a-rebours|Exo-60-JS-Bases-2|Exo-61-JS-While|Exo-62-JS-For|Exo-63-Age-du-capitaine|Exo-64-FizzBuzz|Exo-65-JS-break-continue|Exo-66-JS-Fonctions-natives|Exo-67-JS-Fonctions-personnalisees-1|Exo-68-JS-Fonctions-personnalisees-2|Exo-69-JS-Boucles-et-elements|Exo-70-JS-Code-a-debug|Exo-71-JS-DOM|Exo-72-JS-DOM-2|Exo-73-JS-DOM-3|Exo-74-JS-DOM-4|Exo-75-JS-Switch-input-values|Exo-76-JS-Kenny|Exo-77-JS-Fonctions|Exo-78-JS-Les-strings|Exo-79-Les-Strings-2|Exo-80-JS-Les-Numbers|Exo-81-JS-Events|Exo-82-JS-Objet-Math|Exo-83-JS-Tableaux|Exo-84-JS-Les-tableaux-liste-de-courses|Exo-85-JS-Les-objets|Exo-86-JS-Les-tableaux-d-objets|Exo-87-JS-Objet-concessionnaire|Exo-88-R-visions-JS|Exo-89-JS-Les-Dates|Exo-90-JS-Revisions-Mega-Pack|Exo-91-JS-Les-objets-intanciables-1|Exo-93-JS-Les-fonctions-anonymes-et-fl-ch-es|Exo-94-JS-Les-fonctions-anonymes-et-fl-ch-es-2|Exo-95-JS-fonctions-a-parametres-variables|Exo-96-JS-fonctions-recursives|Exo-97-JS-setTimeout-et-setInterval|Exo-98-JS-setTimeout-recursif|Exo-100-JS-Heritage-et-prototypes|Exo-101-JS-Heritage-et-classes|Exo-102-JS-Introduction-au-BOM|Exo-103-JS-Gestion-des-erreurs|Exo-104-JS-Realiser-des-fonctions-de-gestion-des-cookies|Exo-105-JS-Le-local-storage|Exo-106-JS-Les-modules|Exo-107-JS-Les-datasets|carousel|ChiFouMi|Compte-a-rebour|createHistory|EvaluationMorpion|JS_Projet_Deviner_un_nombre|Pendu|WindowModal|calculatrice";

let arrayDossierHTML = dossierHTML.split('|');
let arrayDossierCSS = dossierCSS.split('|');
let arrayDossierJS = dossierJS.split('|');

for(let i = 0; i < arrayDossierHTML.length; i++){
    create(arrayDossierHTML[i], "lien", document.getElementById('ulHTML'));
}

for(let i = 0; i < arrayDossierCSS.length; i++){
    create(arrayDossierCSS[i], "lien", document.getElementById('ulCSS'));
}

for(let i = 0; i < arrayDossierJS.length; i++){
    create(arrayDossierJS[i], "lien", document.getElementById('ulJS'));
}

function create(innerHTML, className, parent, title, href){
    let li = document.createElement('li');
    li.className = className;
    parent.append(li);

    let a = document.createElement('a');
    a.innerHTML = innerHTML;
    a.title = innerHTML;
    a.href =  innerHTML;
    li.append(a);
}