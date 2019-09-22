const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    // Listar produtos.
    async index(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 });

        return res.json(products);
    },

    // Criar produto.
    async add(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },

    // Vizualizar produto.
    async view(req, res) {
        const product = await Product.findById(req.params.id);
        
        return res.json(product);
    },

    // Atualizar produto.
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    // Remover produto.
    async delete(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
};