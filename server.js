const express = require('express');

let app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/cabinet', (req, res) => {
  res.render('cabinet');
});

app.get('/podologie', (req, res) => {
  res.render('podologie');
});

app.get('/tarifs', (req, res) => {
  res.render('tarifs');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.listen(8000);