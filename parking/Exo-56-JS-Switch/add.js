let items = prompt("Quel est votre périphérique :");

switch (items) {
    case "souris":
        alert("Vous utilisez le périphérique : souris");
        break;
    case "clavier":
        alert("Vous utilisez le périphérique : clavier");
        break;
    case "ordinateur":
        alert("Vous utilisez le périphérique : ordinateur");
        break;
    case "tapis":
        alert("Vous avez choisi : tapis");
        break
    case "imprimante":
        alert("Vous utilisez le périphérique : imprimante");
        break;
    case "ondulateur":
        alert("Vous utilisez le périphérique : ondulateur");
        break;
    default:
        alert("Nous n'avons pas trouvé votre périphérique !");
        break;
}

