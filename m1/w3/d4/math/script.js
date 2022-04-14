let x = 1
 
console.log(x)

 let n1=5.3;
console.log( Math.round(n1));



let target=document.querySelector('#grazie');

let ringrazziamenti = ['grazie','grazie mille, tante grazie']
let punteggiatura =['','!',]
let smyle= [ ':D',':)']

let rand =Math.floor(Math.random() * 3)


let frase= ringrazziamenti[rand] + ' ' + punteggiatura[rand] + ' ' + smyle[rand];

console.log(frase);



