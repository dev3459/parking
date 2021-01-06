//Récupération des images
const carouselSlide = document.querySelector('.slide');
const carouselImages = document.querySelectorAll('.slide img');

//Récupération des bouttons précédent et suivant
const prevBtn = document.querySelector('#precedentBtn');
const nextBtn = document.querySelector('#suivantBtn');

//Définition de la largeur
let counter = 1;
const size = carouselImages[0].clientWidth;

//initialisation du slide sur la position 1 de l'image
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Évènement des bouttons suivant et next
nextBtn.addEventListener('click', ()=>{
    if(counter >= carouselImages.length -1) return; //Condition qui empêche de sortir du slide en spammant les bouttons !
    changeSlide(true);
});

prevBtn.addEventListener('click', ()=>{
    if(counter <= 0) return; //Condition qui empêche de sortir du slide en spammant les bouttons !
    changeSlide(false);
});

//Évènement qui écoute les transitions
carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id === 'dernierClone'){
        premierDernier(true);
    }else if(carouselImages[counter].id === 'premierClone'){
        premierDernier(false);
    }
});

//Fonction pour changer les slides
function changeSlide(param){
    if(param){
        counter++;
    }else{
        counter--;
    }

    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

//Fonction boucle infini
function premierDernier(param){
    if(param){
        counter = carouselImages.length - 2;
    }else{
        counter = carouselImages.length - counter;
    }

    carouselSlide.style.transition = "none";
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}