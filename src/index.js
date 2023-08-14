const express = require('express');
const morgan = require('morgan');
const path = require('path');
const hbs = require('express-handlebars');
// import { engine } from 'express-handlebars';
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
console.log('Path: ' + __dirname)

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', hbs.engine({extname: '.hbs'}));
// app.engine('.hbs', engine({extname: '.hbs'}));


app.set('view engine', 'hbs');
app.set('views', './src/resources/views')
// console.log('Path: ', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})