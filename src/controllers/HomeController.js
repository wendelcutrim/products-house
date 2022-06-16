const ProdutoModel = require("../models/produtoModel");

const HomeController = {
    showIndex: (req, res) => {
        const produtos = ProdutoModel.findAll();
        return res.render("home/landingpage", {produtos});
    },

    showOneProduct: (req, res) => {
        const { id } = req.params;
        const produto = ProdutoModel.findById(id);
        if(!produto){
            return res.render("home/not-found", {error: "Produto não encontrado"});
        }

        return res.render("produtos/detalhes", {produto});
    }
};

module.exports = HomeController;