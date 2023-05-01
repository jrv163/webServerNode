require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');


// Midleware : es una función que se ejecuta antes de hacer una cosa u otra
// para servir contenido estático
 app.use( express.static('public') )// especificar la ruta, este caso public

app.get('/', (req, res) => {
  res.render('home', {
    nombre: ' Jamer Rodríguez',
    titulo: 'Curso Node'
  });
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: ' Jamer Rodríguez',
    titulo: 'Curso Node'
  });
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: ' Jamer Rodríguez',
    titulo: 'Curso Node'
  });
})

app.get('*', (req, res) => {
  res.sendFile( __dirname + '/public/404.html')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })