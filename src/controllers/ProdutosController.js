const ProdutoModel = require("../models/produtoModel");

const ProdutosController = {
    showAllProducts: (req, res) => {
        const produtos = ProdutoModel.findAll();
        return res.render("adm/produtos/lista", {produtos});
    },

    showOneProduct: (req, res) => {
        const {id} = req.params;
        const produto = ProdutoModel.findById(id);
        return res.render("adm/produtos/detalhes", {produto});
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
    },

    showEditProduct: (req, res) => {
        const {id} = req.params;
        const produto = ProdutoModel.findById(id);
        return res.render("adm/produtos/editar", {produto})
    },

    editProduct: (req, res) => {
        const {id} = req.params;
        const {nome, imagem, preco, ativo, descricao} = req.body;
        const produto = {
            id,
            nome,
            imagem,
            preco,
            ativo: (ativo ? true : false),
            descricao
        }

        ProdutoModel.update(id, produto);
        return res.redirect("/adm/produtos");
    },

    deleteProduct: (req, res) => {
        const {id} = req.params;
        ProdutoModel.delete(id);
        return res.redirect("/adm/produtos");
    }

};

module.exports = ProdutosController;