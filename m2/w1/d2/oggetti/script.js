




//descrivo in maniera precisa unp smartphone

let smartphone= {
    marca:'samsung',
    modello:'galaxy s7 edge',
    prezzo: 150,
    accendi : function(){
        //fa qualcosa
    }
}


//*lettura e scrittura degli oggetti*//

let j = {} // è un oggetto vuoto
let k = new Array()

let pizza = {

    gusto: 'margherita',
    tipo: 'napoletana',
    prezzo: '5',
    dettagli : function(){
        console.log('la pizza margherita costa 5 euro')
    }

}
console.log(pizza.gusto);

pizza.gusto = 'diavola'

console.log( pizza.gusto);


pizza.dettagli() //è un metodo 

function dettagli(){
    console.log('è una funzione differente')

}
dettagli()//èuna funzione


//*costruttore dell oggetto*//

function Pizza(g,t,p){
this.gusto = g
this.tipo = t
this.prezzo = p
this.dettagli = function(){
    console.log('la pizza margherita costa 5 euro')
}
}

let margherita = new Pizza('margherita','napoletana',5)
let margherita2 = new Pizza('margherita','pinza',7)
console.log(margherita);
margherita2.tipo = 'romana' 
console.log(margherita2);


Pizza.prototype.disponibilita = true























