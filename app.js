const express = require( 'express' );
const app = express(); 


app.listen(3000, () =>{
    console.log('Hello World!!! It is post 3000.');
});


app.use(function (req, res, next) {
    console.log('Hello')
    next();
})

app.get('/', (req, res) =>{
    res.send('Welcoooome!');
})

app.get('/is-anybody-in-there', (req, res, next) =>{
    res.send('somebody here');
})

app.get('/modernism',(req, res, next) =>{
    res.sendStatus(200);
})
