
//creo un oggetto e le valorizzo  a mano

let oggetto = {
    nome: 'Mario'
}

//i due sistemi sotto servono a creare serie di oggetting
//sono come dei librettti di istruzioni che servono a creare oggetti
function CostruttoreOggetto(){
    this.noe = 'Mario'
}

let oggetto2 = new CostruttoreOggetto();



// classe
class ClasseOggetto{
    constructor(){
        this.nome = 'Mario'
    }
}

let oggetto3 = new ClasseOggetto();


console.log(oggetto);
console.log(oggetto2);
console.log(oggetto3);

class Automobile{
    constructor(_marca, _colore){
        this.marca = _marca
        this.colore = _colore
        this.ruote = 4
    }
}

let mercedes= new Automobile ('mercedes','nero')
let apecar = new Automobile('piaggio','nero')
apecar.ruote = 3;

console.table(apecar);
console.table(mercedes);

let fiat = new Automobile('','')
fiat.marca = 'fiat'
fiat.colore = 'bianco'

console.table(fiat);


//parentesi quadre

let pizza = {
    gusto : 'margherita',
    0: 'test',
    1: 'test2'

}

pizza['gusto']//bene ma non benissimo4
pizza.pizza.gusto// sintassi corretta


let pizza2 ={
    0 : 'margherita',

}


//non funziona
pizza2['0']
//





















