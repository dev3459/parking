let body = document.getElementById('body');

class WindowModal{

    constructor(title, para){
        this.title = title;
        this.para = para;
    }

    /**
     * 
     * @param {String} element L'élément HTML
     * @param {String} id L'id de l'élément HTML
     * @param {String} text Le texte contenu dans l'élément
     * @param {String} parent Le parent de l'élément HTML
     */
    createElement(elementHTML, id, text, parent){
        let element = document.createElement(elementHTML);
        element.id = id;
        element.innerHTML = text;
        parent.appendChild(element);
    }

    initElement(){
        new WindowModal(null,null).createElement('div', 'background', null, body);
        new WindowModal(null,null).createElement('div', 'content', null, document.getElementById('background'));
        new WindowModal(null,null).createElement('h4', 'title', this.title, document.getElementById('content'));
        new WindowModal(null,null).createElement('p', 'para', this.para, document.getElementById('content'));
        new WindowModal(null,null).createElement('div', 'btnContent', null, document.getElementById('content'));
        new WindowModal(null,null).createElement('button', 'btn1', "Accepter", document.getElementById('btnContent'));
        new WindowModal(null,null).createElement('button', 'btn2', "Refuser", document.getElementById('btnContent'));
        btnFunction();
    }

    close(){
        document.getElementById('background').remove();
    }
}

//Création du boutton d'exemple
new WindowModal(null,null).createElement('button', 'btnExample', 'exemple', body);

function btnFunction(){
    let btnClose = document.getElementsByTagName('button')[1]
    btnClose.addEventListener('click',function(){
        new WindowModal(null,null).close();
    });
    let btnAccept = document.getElementsByTagName('button')[2]
    btnAccept.addEventListener('click',function(){
        new WindowModal(null,null).close();
    });
}

let btnOpen = document.getElementsByTagName('button')[0];

btnOpen.addEventListener('click', function(){
    //OUVRIR la fenêtre
    new WindowModal("Example Title", "Exempmle").initElement();
});
