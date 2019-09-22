const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// Rotas para o CRUD produto.
routes.get('/products', ProductController.index);
routes.post('/products', ProductController.add);
routes.get('/products/:id', ProductController.view);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

module.exports = routes;
