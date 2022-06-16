const ProdutoModel = require("../models/produtoModel");

const ProdutosController = {
    showAllProducts: (req, res) => {
        const produtos = ProdutoModel.findAll();
        return res.render("adm/produtos/lista", {produtos});
    },

    showCreatePage: (req, res) => {
        return res.render("adm/produtos/cadastro");
    },

    store: (req, res) => {
        const { imagem, nome, preco, ativo, descricao } = req.body;
        const produto = {
            nome,
            imagem,
            preco,
            ativo: (ativo ? true : false),
            descricao,
        }

        ProdutoModel.save(produto);

        return res.redirect("/adm/produtos");
    }

};

module.exports = ProdutosController;