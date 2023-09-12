const express = require('express');
const morgan = require('morgan');
const path = require('path');
const hbs = require('express-handlebars');
const { createDiffieHellmanGroup } = require('crypto');
// import { engine } from 'express-handlebars';
const route = require('./routes');
const db = require('./config/db')

//Connect to DB

db.connect();

const app = express();

app.use(
  express.urlencoded({
      extended: true,
  }),
);
app.use(express.json());

const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));
console.log('Path: ' + __dirname)

//Routes init
route(app);



app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', hbs.engine({ extname: '.hbs' }));
// app.engine('.hbs', engine({extname: '.hbs'}));


app.set('view engine', 'hbs');
app.set('views', './src/resources/views')
// console.log('Path: ', path.join(__dirname, 'resources/views'))





app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})