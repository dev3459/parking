let id = 0;

class CountDown {
	constructor(){
		this.time = document.getElementById("inputSec").value * 1000;
        this.display = document.getElementById('id' + id);
        this.intervalID = null;
        this.pause = false;
		this.start();
	}

	//Fonction du compte à rebour !
	timer(){
        this.display.innerHTML = this.getHours() +':'+this.getMinutes() +':'+ this.getSeconds()+':'+ this.getMilliSeconds();

		if (this.time > 0){
			this.time -= 100;
		}
		else{
            this.display.style.color = "red";
            this.display.innerHTML = "Fini";
            clearInterval(this.intervalID);
		}
	}

	//Fonction pour initialiser le compte à rebour
	start(){
        this.intervalID = setInterval(this.timer.bind(this), 100);
        return this.intervalID;
	}

	//Récupération de l'heure
	getHours(){
	    let hour = Math.floor((this.time / (1000 * 60 * 60)));
		return hour < 10 ? '0' + hour : hour ;
	}

	//Récupération des minutes
	getMinutes(){
	    let min = Math.floor((this.time / (1000 * 60)) % 60 );
		return min < 10 ? '0' + min : min;
	}

    //Récupération des secondes
	getSeconds(){
		let sec = Math.floor((this.time / 1000) % 60);
	    return sec < 10 ? '0' + sec : sec;
	}

	//Récupération des millisecondes
	getMilliSeconds(){
	    let mSec = Math.floor((this.time / 100) % 10);
		return mSec < 10 ? '0' + mSec : mSec;
    }

    //Fonction pour mettre sur pause le compte à rebour
    stop(){
        if(this.pause){
            clearInterval(this.intervalID);
        }else{
            this.start();
            
        }
    }
}

//Fonction permettant de créer les compte à rebours
function createEl(){
    let elementContent = document.createElement('div');
    elementContent.id = "content" + id;
    document.getElementById("container").append(elementContent);

    let element = document.createElement("div");
    element.id = "id" + id;
    element.className = "create";
    elementContent.append(element);

    let btnPause = document.createElement("button");
    btnPause.id = "btnPause" + id;
    btnPause.innerHTML = "Pause";
    elementContent.append(btnPause);

    let btnReset = document.createElement("button");
    btnReset.id = "btnReset" + id;
    btnReset.innerHTML = "Reset";
    elementContent.append(btnReset);
}

//Boutton pour créer un compte à rebour lors du clic
document.getElementById('createBtn').addEventListener('click', () => {
    createEl();
    let compteur = new CountDown();

    //Boutton qui appelle la fonction pause de l'objet
    document.getElementById('btnPause' + id).addEventListener('click', () => {
        compteur.pause ?  compteur.pause = false : compteur.pause = true;
        compteur.stop();
    });

    //Boutton qui réinitialise le compte à rebour
    document.getElementById('btnReset' + id).addEventListener('click', () => {
        clearInterval(compteur.intervalID);
        compteur.display.parentElement.remove();
    });

    //Incrémentation de l'id pour la création des éléments !
    id++;
});