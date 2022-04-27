class Pizza{

    constructor( g, tipo= 'napoletana',p=5){
        this.gusto = g
        this.tipo = tipo
        this.prezzo = p
        this.sconto = 0
        
        this.dettagli()

    }
}
dettagli


/* ereditarietà */

class Persona {

    constructor(nome,cognome,anni){
        this.nome = nome
        this.cognome = cognome
        this.anni = anni
    }
    presentazione(){
        console.log('Ciao, mi chiamo'+this.nome+''+this.cognome+ 'ed ho'+this.anni+ 'anni' )
    }

}
 let persona = new Persona('mario','rossi', 30);
 persona.presentazione()

 class Studente extends Persona{
     constructor(nome,cognome,anni,materie){
         super(nome,cognome,anni)
         this.materie = materie
     }
     presentazione(){
         return super.presentazione()+'e sto studiando le seguenti materie:'+this.materie
     }

 }
 
 let studente = new Studente('maria','rosa', 20 [' HTML','css','js'])
 studente.presentazione()