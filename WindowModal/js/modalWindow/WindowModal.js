class WindowModal{
    /**
     *Creation of the title and the paragraph to put in the modal window 
     * @param {String} title 
     * @param {String} para 
     */
    constructor(title, para){
        this.title = title;
        this.para = para;
    }

    /**
     * Function to create elements
     * @param {String} element The HTML element
     * @param {String} id The id of the HTML element
     * @param {String} text The text contained in the element
     * @param {String} parent The parent of the HTML element
     */
    createElement(elementHTML, id, text, parent){
        let element = document.createElement(elementHTML);
        element.id = id;
        element.innerHTML = text;
        parent.appendChild(element);
    }

    /**
     * Initialization of the modal window
     */
    initElement(){
        new WindowModal(null,null).createElement('div', 'background', null, document.body);
        new WindowModal(null,null).createElement('div', 'content', null, document.getElementById('background'));
        new WindowModal(null,null).createElement('h4', 'title', this.title, document.getElementById('content'));
        new WindowModal(null,null).createElement('p', 'para', this.para, document.getElementById('content'));
        new WindowModal(null,null).createElement('div', 'btnContent', null, document.getElementById('content'));
        new WindowModal(null,null).createElement('button', 'btn1', "Accepter", document.getElementById('btnContent'));
        new WindowModal(null,null).createElement('button', 'btn2', "Refuser", document.getElementById('btnContent'));
        
        //manage buttons
        let btnClose = document.getElementsByTagName('button')[1]
        btnClose.addEventListener('click',function(){
            new WindowModal(null,null).close();
        });
        let btnAccept = document.getElementsByTagName('button')[2]
        btnAccept.addEventListener('click',function(){
            new WindowModal(null,null).close();
        });
    }

    /**
     * Close modal window
     */
    close(){
        document.getElementById('background').remove();
    }
}

//Creating the example button
new WindowModal(null,null).createElement('button', 'btnExample', 'exemple', body);

//Select element
let btnOpen = document.getElementsByTagName('button')[0];

//Open modal window
btnOpen.addEventListener('click', function(){
    //OUVRIR la fenêtre
    new WindowModal("Example Title", "Exempmle").initElement();
});