
/* Arbre binaire de recherche */

class Noeud{
       constructor(donnee, gauche=null, droite=null){
           this.donnee = donnee;
           this.gauche = gauche;
           this.droite = droite;
      }
}

class ABR {
      constructor(){
           this.racine = null;
      }
      // ajouter une donnee dans l'arbre
      ajouter(donnee){
         const noeud = this.racine;
         if  (noeud==null){
             this.racine= new Noeud(donnee);
//             return;
         }
         else{
            const rechercheArbre = function(noeud){
                  if(donnee < noeud.donnee){
                      if(noeud.gauche === null){
                        noeud.gauche = new Noeud(donnee)
  //                      return;
                      }
                      else if(noeud.gauche!==null){
                             return rechercheArbre(noeud.gauche);
                      }
                  }
                  else if(donnee > noeud.donnee){
                      if(noeud.droite === null){
                        noeud.droite = new Noeud(donnee);
                      }
                      else if(noeud.droite!==null){
                             return rechercheArbre(noeud.droite);
                      }

                  }
                  else{
                      return null;
                  }
            };
            return rechercheArbre(noeud);
         }
      }
      // chercher la valeur minimum de l'arbre
      trouverMin(){
         let actuel = this.racine;
         while(actuel.gauche !==null){
              actuel = actuel.gauche
         }
         return actuel.donnee
      }
      // chercher la valeur maximum de l'arbre
      trouverMax(){
         let actuel = this.racine;
         while(actuel.droite!==null){
              actuel = actuel.droite
         }
         return actuel.donnee
      }
      // trouver une valeur dans l'arbre et l'afficher
      trouver(donnee){
        let actuel = this.racine
        while(actuel.donnee!==donnee){
            if(donnee < actuel.donnee){
               actuel = actuel.gauche
            }
            else{
               actuel = actuel.droite
            }
        }
        if(actuel ==null){
           return null
        }
        return actuel;
      }
      // savoir si une donnee entree est present dans l'arbre ou non
      estPresent(donnee){
         let actuel = this.racine
         while(actuel){
             if(donnee === actuel.donnee){
                 return true
             }
             if(donnee < actuel.donnee){
                actuel=actuel.gauche
             }
             else{
                actuel=actuel.droite
             }
         }
         return false;
      }
      // Compter le nombre de feuilles
      compterFeuille(noeud){
         noeud = this.racine
         //var nombreFeuille = 0;
         if(noeud==null){
             return 0
         }
         else{
         const rechFeuille = function(noeud) {
                 if((noeud.droite==null || noeud.gauche==null) || (noeud.droite==null && noeud.gauche==null)){
                     return 1;
                 }
                 else  {
                    return rechFeuille(noeud.droite)+rechFeuille(noeud.gauche);
                 }
        };
        return rechFeuille(noeud);}
      }
      // savoir si un noeud est une feuille ou pas
      estFeuille(donnee){
          let noeud = this.trouver(donnee);
          if(noeud.gauche==null && noeud.droite==null){
               return  noeud.donnee+" feuille"
          }
          if(noeud==this.racine){return noeud.donnee +" est le noeud racine"}
          return noeud.donnee + " ordinaire";
      }

      //compter les noeuds dans un ABR

      compterNoeud(){
      let noeud = this.racine
      var compte=0;
      if(noeud==null){return 0}
      else{
          compte++
          const compterFils = function(noeud){
                if(noeud.gauche!=null || noeud.droite!=null){
                   return compterFils(noeud.gauche)+compterFils(noeud.droite)
                }
                return compte;
          }
          return compterFils(noeud)
      }
      }
}

const abr = new ABR()
abr.ajouter(45)
abr.ajouter(24)
abr.ajouter(1)
abr.ajouter(7)

abr.ajouter(460)
abr.ajouter(20)
abr.ajouter(3)
abr.ajouter(30)
abr.ajouter(13)
//console.log(abr.racine)
console.log(abr.estFeuille(45))
console.log(abr.estFeuille(24))
console.log(abr.estFeuille(1))
console.log(abr.estFeuille(7))
console.log(abr.estFeuille(460))
console.log(abr.estFeuille(30))
console.log(abr.estFeuille(3))
console.log(abr.estFeuille(20))
console.log(abr.estFeuille(13))
console.log(abr.compterFeuille());
//console.log(abr.compterNoeud())

