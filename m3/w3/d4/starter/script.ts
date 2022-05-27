class Abbigliamento {
    id:number
    codprod:number
    collezione:string
    capo:string
    modello:number
    quantita:number
    colore:string
    prezzoivaesclusa:number
    prezzoivainclusa:number
    dsponibile:string
    saldo:number

    constructor(vestito){
        this.id = id
        this.codprod = 
        this.collezione = x
        this.capo = x
        this.modello = x
        this.quantita = x
        this.colore = x
        this.prezzoivaesclusa = x
        this.prezzoivainclusa = x
        this.dsponibile = x
        this.saldo = x
    }
    getSaldoCapo(): number{}
    getAcquitoCapo(): number{}
}


fetch("Abbigliamento.json")
.then(res => res.json())
.then((res)=>{
    console.log(res);
    for(let a in res){
        let abb = new Abbigliamento(a.id, a)
        console.log(abb.getAcquitoCapo());
        console.log(abb.getSaldoCapo());
    }

})




function prezzoSaldoAbbigliamento(v:abb){

    return v.prezzoivainclusa - (v.prezzoivainclusa * v.saldo/100)
}

function prezzoSaldoAccessorio(v:abb){

    return v.prezzoivainclusa - (v.prezzoivainclusa * v.saldo/100)
}