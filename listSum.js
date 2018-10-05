/* Liste Somme */

function ElemList(val){
    this.val=val
    this.suivant = null 
}

function Liste(){
    let tete = null
    let longueur = 0

    this.ajouter = function(elem){
         let list = new ElemList(elem)
         longueur++
         if(tete==null){
             tete=list
             
         }
         else{
             let rechercheFin = function(list,elem){
                 if(list.suivant==null){
                     list.suivant = elem
                     
                 }
                 else{
                     return rechercheFin(list.suivant,elem)
                 }
             }
             return rechercheFin(tete,list);
             
         }
         
    }

    this.effacer = function (elem){
        if(tete!==null){
            if(tete.val==elem){
                tete = tete.suivant
            }
            else{
                let prec = tete;
                let cour = prec.suivant
                while(cour.val!=elem){
                    prec = cour
                    cour = cour.suivant
                }
                prec.suivant = cour.suivant
            }
        }
        longueur--
    }
    this.ajouterTrier = function(elem){
        if(tete == null){
            tete = new ElemList(elem)
        }
        else{
                let rech = function(list,elem){

                    if(elem.val>list.val){
                        let prec = list.head()
                        let cur = prec.suivant
                        while(cur.suivant && cur.val<elem.val){
                            prec = cur
                            cur = cur.suivant
                        }
                        elem.suivant = cur
                        prec.suivant = elem
                    }
                }
            
        }
    }

    this.miroir = function(){
        if(tete!=null){
           

        }
    }
    this.head = function(){
        return tete
    }
    this.taille = function(){
        return longueur
    }
    this.setTaille = function(val){
        longueur = val
    }
    this.sum = function(){
        let sum =0;
        if(tete==null){
            return sum;
        }
        else{
            let sumFin = function(list){ 
                let sum=list.val
                if(list.suivant==null){
                   return sum 
                }
                else{
                    return sum +sumFin(list.suivant)
                }
            }
            return sumFin(tete);
        }

    }
}
/* A eviter */
Liste.prototype.concat = function(liste){
    
    let courant = liste.head()
    this.ajouter(courant.val)
    while(courant.suivant){
        courant = courant.suivant
        this.ajouter(courant.val)
    }
    return this
} 
/* mieux */
Liste.prototype.concato = function(liste){
    let courant = this.head()
    while(courant.suivant){
        courant = courant.suivant
    }
    courant.suivant = liste.head()
    let newTaille = this.taille() + liste.taille()
    this.setTaille(newTaille)
    return this
}    



let l = new Liste()
let lc = new Liste()
l.ajouter(6)
l.ajouter(4)
l.ajouter(5)
l.ajouter(10)
l.ajouter(100)
console.log("-------somme et longueur liste 1 avant concatenation------")
console.log(l.sum())
console.log(l.taille())
lc.ajouter(19)
lc.ajouter(10)
lc.ajouter(200)
//l.ajouter(lc)
console.log("-------somme et longueur liste 1 apres concatenation------")
console.log("                 "+l.concato(lc).sum())
console.log("                 "+l.taille())
console.log(l.head())
l.effacer(5)
console.log(l.head())
console.log(l.taille())

//console.log(l.head())
