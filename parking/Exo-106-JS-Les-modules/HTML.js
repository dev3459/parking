/**
 * Bloc pour créer des divs !
 * @param {String} id L'id de l'élément div
 * @param {String} className La classe de l'élément div
 * @param {String} innerHTML Le texte contenu dans l'élément div
 */
export function createDiv(id, className, innerHTML){
    let div = document.createElement('div');
    div.id = id;
    div.className = className;
    div.innerHTML = innerHTML
    return div;
}

/**
 * Bloc pour créer des inputs !
 * @param {String} type Le type de l'input ('number, text, phone, email, ...)
 * @param {String} id L'id de l'élément input 
 * @param {String} className La classe de l'élément input
 * @param {String} value La valeur de l'élément input 
 */
export function createInput(type, id, className, value){
    let input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.className = className
    input.value = value;
    return input;
}

/**
 * Bloc pour créer des labels
 * @param {String} id L'id de l'élément label
 * @param {String} htmlFor L'id de l'input auquel vous voulez le placez
 * @param {String} className La classe de l'élément label 
 * @param {String} innerHTML Le texte de l'élément HTML 
 */
export function createLabel(id, htmlFor,className, innerHTML){
    let label = document.createElement('label');
    label.id = id;
    label.htmlFor = htmlFor;
    label.className = className;
    label.innerHTML = innerHTML;
    return label;
}