let catPic = document.getElementById("cat-pic");
let onCatClick = function(e) {
    let X = e.clientX;
    let Y = e.clientY;

    let stashePic = document.getElementById("mustache-pic");

    stashePic.style.top = (Y - 20) + "px";
    stashePic.style.left = (X - 50) + "px";
};

catPic.addEventListener("click", onCatClick);








