class SonAccount{
    
    private balance: number
    constructor(s){
        this.balance = s
    }
    deposit(s:number){
        this.balance += s
    }
    preleva(s:number){
        this.balance -= s

    }
    interesse(s){
        return s *
    }
    getBalance(){
        
        return this.balance
    }
}
console.log('------------son account----------------- ' + '\n');
// set della proprietà al costruttore
let son = new SonAccount(0)
let son1 = new SonAccount(500)
console.log(son.balance)
console.log(son.getBalance());
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + son.deposit(1000));
console.log('withdraw:-' + son.oneWithdraw(500));
console.log('withdraw:-' + son.twoWithdraw(400));
console.log('totalBalance:' + son.totalBalance());

class MotherAccount extends SonAccount{
    interesse(s:number){
        return s *0.1
    }
    preleva(s:number){
        this.balance -= s + this.interesse(s)
        return s

    }
}
let mother = new MotherAccount(0)
console.log('--------------mother account----------------------------------' + '\n');
console.log(mother);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + mother.deposit(1000));
console.log('withdraw:-' + mother.oneWithdraw(500));
console.log('withdraw:-' + mother.twoWithdraw(400));
console.log('totalBalance:' + mother.totalBalance());
