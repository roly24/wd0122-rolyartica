
//con create element genero un elemento html in memoria e lo metto nella bariabile assegnata , 
//in nessun moso questo metodo mostra il tag nel html
let div = document.createElement('div');//<div></div>
div.innerHTML = 'test'
console.log(div);
div.classList.add('classeProva')



let div2 = document.createElement('div');
div2.innerHTML = 'test2'
div2.classList.add('classeProva')

document.querySelector('#html-generato').append(div)//in fondo 
document.querySelector('#html-generato').prepend(div2)//in alto



/*to do list*/

let bottone = document.querySelector('#inserisci');
let toDoArea = document.querySelector('#to-do');

let x = 1;

bottone.addEventListener('click', function(){//se clicchi su bottone fa questa cosa 

    //genera l'elemento e gli do una classe
     let todoWrap = document.createElement('div')
    todoWrap.classList.add('todo')

    //prelevo il testo dal campo input e lo inserisco nel div appena generato
    let testo = document.querySelector('#testo')
    todoWrap.innertext = x +''+ testo.value
     x++;

            //creo un bottone che mi servira per eliminare il to-do
            let close = document.createElement('button')
            //gli do una classe per lo stile (da fare successivamente)
            close.classList.add('closeButton')
            //inserisco il testo del bottone
            close.innerText = 'elimina'

            close.addEventListener('click',function(){
                todoWrap.remove()
            })
            //inserisco il bottone generato dentro l'elemento creato



    //faccio si che l'elemento  generato venga mostratoc
    toDoArea.append(todoWrap)

    //svuotare il campo 
    testo.value = ''


})










