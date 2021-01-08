function createDiv(className, couleur, ID, parent){
    let divCreate = document.createElement("div");
    divCreate.className = className;
    divCreate.style.backgroundColor = couleur;
    divCreate.id = ID;
    parent.append(divCreate);
}

createDiv("planet", "blue", "planet-id", document.body);
createDiv("moon", "white", "moon-id", document.getElementById("planet-id"));
createDiv("planet", "orange", "planet-mars-id", document.body);
createDiv("moon", "gray", "moon-mars-id", document.getElementById("planet-mars-id"));
createDiv("planet", "green", "planet-marsienne-id", document.body);
createDiv("moon", "yellow", "moon-etrange-id", document.body);
