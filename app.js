
// importamos express

import routerAPi from './routers/api.js';
import routerWeb from './routers/instRouterWeb.js';
import express from 'express';


// creo la aplicacion
const app = express();

// asigno la carpeta estatica
app.use(express.static('public'));

app.set('views', './public/views'); // specify the views directory
app.set('view engine', 'ejs'); // register the template engine

// parse el body url encode
app.use(express.urlencoded({extended: true}));

// parse el body a JSON
app.use(express.json());

// le indicamos que utilice los router
app.use(routerAPi);
app.use(routerWeb);

// llamamos por el puerto 9001 (localhost:9001/)
app.listen(9001, function (){
    console.log("El servidor esta oki - corresponde tp-Web-Api-Mongo");

})