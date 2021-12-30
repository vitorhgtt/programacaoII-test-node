var express = require('express');
var logger = require('morgan');
var app = express();
app.use(logger('dev'));
...


var square = require('./square'); // Chamamos o arquivo utilizando o require()
console.log('The area of a square with a width of 4 is ' + square.area(4));
var wiki = require('./wiki.js');
// ...
app.use('/wiki', wiki);

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!');
});

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/animals', function(err, db) {
  if (err) throw err;

  db.collection('mammals').find().toArray(function (err, result) {
    if (err) throw err;

    console.log(result);
  });
});
//  Definir o diretório para conter os modelos ('views')
app.set('views', path.join(__dirname, 'views'));

// Definir o motor de visualização para usar, neste caso 'some_template_engine_name'
app.set('view engine', 'some_template_engine_name');

app.get('/', function(req, res) {
  res.render('index', { title: 'About dogs', message: 'Dogs rock!' });
});

app.use(express.static('public'));
app.use(express.static('media'));

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});