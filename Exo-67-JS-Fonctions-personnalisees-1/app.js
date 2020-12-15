function changeParaph (paragraphe, phrase) {
    let paraph = document.getElementById(paragraphe);
    paraph.innerHTML = phrase;
}

changeParaph('p1', 'Bonjour');
changeParaph('p2', 'Test');
changeParaph('p3', 'Essai');
changeParaph('p4', 'Hello world !');
changeParaph('p5', 'Au revoir');