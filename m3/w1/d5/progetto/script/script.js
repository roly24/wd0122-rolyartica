let result;
fetch("/json/users.json")
.then(res=> res.json())
.then(ris =>{
    ris.forEach(element =>{
        document.querySelector("table").innerHTML += `<tr><td>${element.username}</td><td>${element.firstName}</td><td>${element.lastName}</td><td>${element.gender}</td><td>${element.email}</td><td></tr>`
    })
    
})
