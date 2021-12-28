import express from 'express';
import path from 'path';
import routerProductos from './routes/productos.js';

// INICIALIZACION API con EXPRESS 
const app = express();
const puerto = 8080;

//disponibilizo carpeta views
const viewsPath = path.resolve(__dirname, '../views');
app.set('views', viewsPath);
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productos', routerProductos);

app.get('/api/', (req, res) => {
	res.render('formulario');
});

const server = app.listen(puerto, () =>
  console.log('Server up en puerto', puerto)
);

server.on('error', (err) => {
  console.log('ERROR ATAJADO', err);
});
