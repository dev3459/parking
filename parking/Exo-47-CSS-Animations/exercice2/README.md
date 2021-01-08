Exercice 2 :

    - Creer une animation durant 3 secondes qui modifie le background du div "foo" pour qu'il passe progressivement du
    rouge au vert
    Appelez cette animation bgChange


Théorie :

    Les animations css permettent d'animer les propriétés css d'un élément html sans utiliser javascript.

    En une seule animation, il est possible de changer autant de propriétés css que vous le souhaitez.

    Les animations css s'écrivent en utilisant deux régles , la premiere regle concerne l'animation en elle même (
    sa durée etc... )

    La seconde régle appelée keyframes permet de définir les différentes étapes de l'animation.

    On peut définir les keyframes de deux façons :

     - soit en partant d'un état de départ puis d'un état d'arrivé
     - soit en utilisant les pourcentages ( si l'animation dure 4 secondes, 50% corresponds à la deuxieme seconde )


   Propriétés css spécifiques aux animations :

      animation-duration : durée en secondes de l'animation
      animation-delay : durée en secondes avant le début de l'animation
      animation-iteration-count : indique le nombre d'éxecution de l'animation
                                    Il est possible d'utiliser infinite pour que l'animation s'éxécute indéfiniment
      animation-fill-mode : spécifie si l'élément animé va conserver l'état des propriétés css animées
                            Valeurs possibles les plus courantes :

                            none ( l'élément reviens à son état initial )
                            forwards ( l'élément conserve les modifications css de la derniere keyframe )

      animation-name : Propriété indispensable car elle indique les kayframes à utiliser pour l'animation