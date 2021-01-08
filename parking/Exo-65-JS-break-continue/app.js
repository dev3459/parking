let paraph = document.getElementsByClassName("paragraphe");
for (i = 0; i < paraph.length; i++) {
    if (i === paraph.length - 1) {
        break;
    }

    if (i % 2 === 0) {
        continue;
    }

    paraph.item(i).innerHTML = i;
}