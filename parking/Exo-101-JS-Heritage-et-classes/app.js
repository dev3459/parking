class vehicule {
    constructor(couleur, roues, marque){
        this.couleur = couleur;
        this.roues = roues;
        this.marque = marque;
    }

    demarrer(){
        console.log('Le véhicule est démarré !');
    }

    arreter(){
        console.log('Le véhicule est arrêter!');
    }
}

class velo extends vehicule {
    constructor(couleur, roues, marque, rayonRoues, typePeinture){
        super(couleur,roues,marque);
        this.rayonRoues = rayonRoues;
        this.typePeinture = typePeinture;
    }

    monter(){
        console.log('Je monte sur le vélo !');
    }
}

class voiture extends vehicule{
    constructor(couleur, roues, marque, assurance, proprietaire){
        super(couleur,roues,marque);
        this.assurance = assurance;
        this.proprietaire = proprietaire;
    }

    passerAuCarWash(){
        console.log('Je passe au CarWash !! :-D');
    }
}