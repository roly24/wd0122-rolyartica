

let richiesta = new XMLHttpRequest();//inizializzo l'oggetto

richiesta.open('GET','https://sofin.wp-admin.it/public/api/v1/user' ); //si utilizza per chiamate in  lettura PUT/PACH(per aggiornare) DELELTE eliminazione

richiesta.onload = function(){
    console.log(richiesta.response);
}

richiesta.send()//avvio la richiesta



fetch('https://jsonplaceholder.typicode.com/users')
.then(data => data.json())
.then(data => {

    console.log(data);
    for(let user of data){

        let div = document.createElement('div');
        div.innerHTML = user.name

        document.querySelector('#target').append(div)
    }



})

//JSON

 let j = '{"name":"mario","eta":30}'

 console.log(JSON.parse(j).name)//versione trasformata in oggetto

 //per convertire un oggetto in stringa dovrei usare 
 //JSON.stringify(oggetto)


 fetch('prova.json')
 .then(data=>)
 .then(data)


