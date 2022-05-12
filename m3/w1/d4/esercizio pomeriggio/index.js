const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/contatti',(req, res) => {
    res.sendFile('contatti');
})
app.get('/chi siamo',(req, res) => {
    res.send('cotatti');
})


app.listen(300, () => {

    console.log('server running at http://127.0.0.1:3000')
})