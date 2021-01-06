import * as moduleHTML from './HTML.js';

const result = document.getElementById('result');

result.append(moduleHTML.createDiv('content', 'content', 'bonjour'));

result.append(moduleHTML.createLabel('label','input','label', "E-Mail"));

result.append(moduleHTML.createInput('email', 'input', 'input', "E-mail"));

result.append(moduleHTML.createLabel('labelPassword','inputPassword','labelPassword', "Password"));

result.append(moduleHTML.createInput('password', 'inputPassword', 'inputPassword', "Password"));