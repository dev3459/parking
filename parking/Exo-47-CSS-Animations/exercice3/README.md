Exercice 3 :

    - Creer une animation comportant 5 étapes ( 0%,25%,50%,75%,100% )

    0% - Définir un fond rouge, left à 0px et top à 0px
    25% - Définir un fond bleu, left à 0px, top à 200px
    50% - Définir un fond vert, left à 200px, top à 200px
    75% - Définir un fond jaune , left à 200px, top à 0px
    100% - Définir un fond rouge, left à 0px et top à 0px



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