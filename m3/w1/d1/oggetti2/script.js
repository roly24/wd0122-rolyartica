class Automobile {
    constructor(_marca,_colore){
        this.marca = _marca;
        this.colore = _colore;
        this.ruote = 4
        this.prezzo = 100000000
    }

    sconto(percentuale){
        this.prezzo = (this.prezzo/100) * (100 - percentuale)
    }
}
let mercedes = new Automobile('mercedes','nero')

console.table(mercedes);
mercedes.sconto(40)
console.table(mercedes);


let ferrari = new Automobile('ferrari','rossa')
let lamborghini = new Automobile('lamborghini','gialla')

Automobile.prototype.brandProtetto= truetype

console.log([ferrari,lamborghini]);
console.table(ferrari.brandProtetto);






