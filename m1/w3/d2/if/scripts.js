let eta = prompt('quanti anni hai?') || 18;
if(eta >=18 && eta <=120){
    document.write('sei maggiorenne<br>')
}
else if(eta > 120){
    document.write('sei antico<br>')
}

else{
    location.href = 'https://pattle.github.io/simpsons-in-css/'
}

console.log(eta >= 18)

let condizion = true;
if(condizion){
    document.write('è vera')
}

let nomi = 'mario ,giovanni';
nomi+= 'carlo';
console.log(nomi);


let conto = 5;
conto+= 5;
console.log(conto);