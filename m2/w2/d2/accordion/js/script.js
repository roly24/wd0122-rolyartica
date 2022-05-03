

let bottoni= document.querySelector('button')
let contents= document.querySelector('.content')


// for (let i=0; i < bottoni.length; i++)
// bottoni[i].addEventListener('click', function(){ //sarebbe 'al click ul bottone dai la classe content

    // contents[i].classList.toggle('open')  //toggle fa tipo un ON-OFF
   
// })


/*altro metodo per fare accordion*/
/*for (let bottone of bottoni){

    bottone.addEventListener('click', function(){

        bottone.nextElementSibling.classList.toggle('open')


    })
}/


/*altro metodo */
/*bottoni.forEach((bottone, i) =>{
    bottone.addEventListener('click', function(){
        bottone.nextElementSibling.classList.toggle('open')
        bottone.nextElementSibling.id = 'bottone-'+i
    })
})*/

/*secondo metodo per piu elementi */
for(let bottone of bottoni ){

    bottone.addEventListener('click', function(){
        
        let altriOpen = document.querySelector('.content.open')

        if(altriOpen != null)
        altriOpen.classList.remove('open')


       let target = bottone.getAttribute('data-target')
       let targetContent = document.querySelector(target)
       if(daChiudere != daAprire){
       document.querySelector(target).classList.toggle('open')}

    })
}
