

let bottone = document.querySelector('#myForm button')

bottone.addEventListener('click', function(event){
    
    event.preventDefault();//prevengo l'invio del form bloccando il comportamento standard del bottone 

    

    let nome = document.querySelector('#nome').value 
    let password = document.querySelector('#password').value 
    let valid = true

    if(nome == ''){
        console.log(nome.nextElementSibling)
        nome.nextElementSibling.innerHTML = 'devi inserire il nome'
        valid= false
        // alert('devi inserire il nome')
    }
    if(password == ''){
        password.nextElementSibling.innerHTML = 'devi inserire la password'
        valid= false
        // alert('devi inserire il password')
    }

    if (valid){

        document.querySelector('#myform').submit()
    }



})


