const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o APP.
const app = express();
// Permite o recebimento de dados no formato JSON.
app.use(express.json());
// Adiciona CORS a API.
app.use(cors());

// Iniciando o DB.
mongoose.connect('mongodb://localhost:27017/nodeapi', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// Importa os models da API.
requireDir('./src/models');

// Rotas da API.
app.use('/api', require('./src/routes'));

// Escuta na porta 3001.
app.listen(3001);
