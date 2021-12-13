"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//pueto solicitado 
const puerto = 8080;
const app = (0, _express.default)();
const server = app.listen(puerto, () => console.log('Servidor HTTP escuchando en puerto', puerto)); //mensaje de error

server.on('error', err => {
  console.log('ERROR =>', err);
});
let visitas = 0; //ejercicio 1

app.get('/items', (request, response) => {
  visitas++;

  const productosPath = _path.default.resolve(__dirname, './views/productos.txt');

  const productos = JSON.parse(_fs.default.readFileSync(productosPath, "utf-8"));
  const items = {
    items: productos,
    cantidad: productos.length
  };
  response.json(items);
}); //ejercicio 2

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

app.get('/item-random', (request, response) => {
  const productosPath = _path.default.resolve(__dirname, './views/productos.txt');

  const productos = JSON.parse(_fs.default.readFileSync(productosPath, "utf-8"));
  const i = random(0, productos.length - 1);
  const item = {
    item: productos[i]
  };
  response.json(item);
}); //ejercicio 3

app.get('/visitas', (request, response) => {
  visitas++;
  response.json({
    msg: `Esta es la visita numero ${visitas}`
  });
});