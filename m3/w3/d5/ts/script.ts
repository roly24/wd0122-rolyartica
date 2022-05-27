


interface smartPhone{
    carica:number;
    numeroChiamate:number;
    Ricarica(unaRicarica:number):void
    chiamata(minutiDurata:number):void
    costoMinuti:number;
    numero404():number
    NumeroChiamate(numeroChiamateFatte:number):number
    azzeraChiamate():void


}

class FirstUser implements smartPhone{
    carica:number = 10;
    costoMinuti:number = 0.20;
    numeroChiamate:number = 0;

    public Ricarica(unaRicarica:number):void{
        this.carica - this.carica + unaRicarica
    }
    public chiamata(minutiDurata:number):void{
        this.carica - this.carica - (minutiDurata*this.costoMinuti)
        this.numeroChiamate ++
    }

    public numero404():number{
        return this.carica;
    }

    public NumeroChiamate():number{
        return this.numeroChiamate
    }

    public azzeraChiamate():void{
        this.numeroChiamate = 0
    }
 
}

let firstUser = new FirstUser();
firstUser.Ricarica(5)
firstUser.chiamata(5)

firstUser.numero404()
firstUser.NumeroChiamate()

console.table(firstUser)

class SecondUser implements smartPhone{
    carica:number = 50;
    numeroChiamate:number = 0;
    costoMinuti:number = 0.20;

    constructor(){
        this.numeroChiamate = 0;
    }

    public Ricarica( unaRicarica:number):void{
        this.carica - this.carica + unaRicarica 
    }

    public chiamata(minutiDurata:number):void{
        this.carica - this.carica - (minutiDurata*this.costoMinuti)
        this.numeroChiamate++
    }

public numero404():number{
    return this.carica;
}

public NumeroChiamate():number{
    return this.numeroChiamate 
}

public azzeraChiamate():void{
    this.numeroChiamate = 0
}

}

let secondUser = new SecondUser;
secondUser.Ricarica(10)
secondUser.chiamata(3)
secondUser.numero404()
secondUser.NumeroChiamate()

console.table(secondUser)


class ThirdUser implements smartPhone{
    carica:number = 15;
    numeroChiamate:number = 0;
    costoMinuti:number = 0.20;

    constructor(){
        this.numeroChiamate = 0;
    }

    public Ricarica( unaRicarica:number):void{
        this.carica - this.carica + unaRicarica 
    }

    public chiamata(minutiDurata:number):void{
        this.carica - this.carica - (minutiDurata*this.costoMinuti)
        this.numeroChiamate ++
    }

public numero404():number{
    return this.carica;
}

public NumeroChiamate():number{
    return this.numeroChiamate
}

public azzeraChiamate():void{
    this.numeroChiamate = 0
}

}

let thirdUser = new ThirdUser;
thirdUser.Ricarica(10)
thirdUser.chiamata(5)
thirdUser.chiamata(7)
thirdUser.chiamata(2)
thirdUser.numero404()
thirdUser.NumeroChiamate()

console.table(thirdUser)
