/* Liste Chainee */

function ListeChainee(){
         var length = 0;
         var head = null;

         var Noeud = function(element){
             this.element = element;
             this.next = null 
         };

         this.taille = function(){
              return length;
         };

         this.tete = function(){
              return head;
         };

         this.ajouter = function(element){
              var noeud = new Noeud(element)
              if(head == null){
                head = noeud;
              }else{
                   var noeudActuel = head;
                   while(noeudActuel.next){
                        noeudActuel = noeudActuel.next
                   }
                   noeudActuel.next = noeud;
              }
              length++
         };

         this.effacer = function(element){
              var noeudActuel = head;
              var noeudPrecedent;

              if(noeudActuel.element === element){
                 head = noeudActuel.next;
              }else{
                   while(noeudActuel.element !== element){
                       noeudPrecedent = noeudActuel;
                       noeudActuel = noeudActuel.next;
                   }
                   noeudPrecedent.next = noeudActuel.next
              }
              length--;
         };

         this.estVide = function(){
              return length === 0;
         };

         
}
