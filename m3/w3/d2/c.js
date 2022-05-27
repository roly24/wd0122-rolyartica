let account1 = 0
let account2 = 5000
function deposita(s, a) {
    a = a + s
    return a
}
function preleva (s, a){
    a=a - s
    return a
}
function prelevaInteresse (s, a){

}
deposita(1000, account1)
preleva(500, account1)
preleva(400,account1)
console.log (account1)
deposita(1000,account2)
preleva(500,account2)
preleva(400,account2)
console.log (account2)