let result;
fetch("/json/users.json")
.then(res=> res.json())
.then(ris =>{
    ris.forEach(element =>{
        document.querySelector("table").innerHTML += `<tr><td>${element.username}</td><td>${element.firstName}</td><td>${element.lastName}</td><td>${element.gender}</td><td>${element.email}</td></tr>`
    
    
    
    
    
        // let tdAzioni = document.createElement('td')
        // let btnElimina = document.createElement('button')
        //                 btnElimina.innerHTML = 'Elimina'
        
        //                 btnElimina.addEventListener('click',function(){
        
        //                     fetch("/json/users.json", {
        //                         method: 'DELETE'
        //                     })
        
        //                 })
        
        //                 tdAzioni.append(btnElimina)
        
        
        //                 tr.append(tdAzioni)
        //                 tabella.append(tr)
        })

})


