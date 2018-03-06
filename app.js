const express = require( 'express' );
const app = express();
const nunjucks = require('nunjucks');
const morgan = require('morgan');


nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];




app.use(function (req, res, next) {
    console.log('Hello')
    next();
})

app.get('/', (req, res) =>{
    res.render( 'index', {title: 'Hall of Fame', people: people} );
})

app.get('/is-anybody-in-there', (req, res, next) =>{
    res.send('somebody here');
})

app.get('/modernism',(req, res, next) =>{
    res.sendStatus(200);
})

app.listen(3000, () =>{
    console.log('Hello World!!! It is post 3000.');
});