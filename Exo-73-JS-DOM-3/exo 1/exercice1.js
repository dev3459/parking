let avatarEls = document.getElementsByTagName("img");

for(let i = 0; i < avatarEls.length; i++){
    avatarEls[i].style.height = '50px';
    avatarEls[i].title = "test " + i;
    avatarEls[i].alt = "Image test " + i;
}