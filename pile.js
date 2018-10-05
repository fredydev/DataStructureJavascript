/* Pile */

function Pile(){
     let stockage=[]
     this.compte=0

    this.sommet = function(){
        if(this.compte==0){
            return null
        }
        return stockage[this.compte-1]
    }
    this.estVide = function(){
        if(this.compte !== 0){
            return false;
        }
        return true
    }

    this.ajouter = function(elem){
        stockage[this.compte]=elem
        this.compte++
        
    }
    this.effacer = function(){
        if(this.estVide()!==true){
           let result = stockage[this.compte-1]
           delete stockage[this.compte-1]
           this.compte--
           return result
        }
        else{return undefined}
    }
    
    this.afficher = function(){
        return stockage
    }

    

     

   


}

function PilePair(p1,p2){
    let p3 = new Pile()
    let p4 = new Pile()
    let elem;
    let ob ={impairl: p3.afficher(),pair: p4.afficher()}
       while(p1.estVide()!==true){
             elem= p1.effacer()
             if(elem%2==0){
                 p4.ajouter(elem)
             }
             else{
                 p3.ajouter(elem)
             }
       }
       while(p2.estVide()!==true){
            elem= p2.effacer()
            if(elem%2==0){
               p4.ajouter(elem)
            }
            else{
                p3.ajouter(elem)
            }
       }
    
    this.afficher=function(){
        return ob;
    }
}

function PilePairUnePileSup(p1,p2){
    let p3 = new Pile()
    let elem;
    let ob ={impair: p1.afficher(),pair: p3.afficher()}
       while(p1.estVide()!==true){
             elem= p1.effacer()
             if(elem%2==0){
                 p3.ajouter(elem)
             }
             else{
                 p2.ajouter(elem)
             }
       }
       while(p2.estVide()!==true){
            elem= p2.effacer()
            if(elem%2==0){
               p3.ajouter(elem)
            }
            else{
                p1.ajouter(elem)
            }
       }
    
    this.afficher=function(){
        return ob;
    }
}




let p1 = new Pile()
let p2 = new Pile()
p1.ajouter(8)
p2.ajouter(4)
p1.ajouter(3)
p1.ajouter(2)
p1.ajouter(45)
p2.ajouter(47)
p2.ajouter(53)

let p3 =new PilePair(p1,p2)
console.log(p3.afficher())

let p4 = new Pile()
let p5 = new Pile()
p4.ajouter(8)
p5.ajouter(4)
p4.ajouter(3)
p4.ajouter(2)
p4.ajouter(45)
p5.ajouter(47)
p5.ajouter(53)

let p7 =new PilePairUnePileSup(p4,p5)
console.log(p7.afficher())