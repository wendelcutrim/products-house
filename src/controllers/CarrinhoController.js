const CarrinhoController = {
    showCart: (req, res) => {
        const {carrinho} = req.session;
        let total = 0;
        if(!carrinho){
            return res.render("home/carrinho", {carrinho: [], total});
        }

        // total = carrinho.map((produto) => Number(produto.preco)).reduce((soma, preco) => soma + preco);
        carrinho.forEach(produto => {
            total += parseFloat(produto.preco);
        });
        return res.render("home/carrinho", {carrinho, total});
    },

    addCart: (req, res) => {
        const {productId, nome, preco, imagem} = req.body;
        const produto = {id: productId, nome, preco, imagem};

        if(req.session.carrinho){
            req.session.carrinho.push(produto);
        } else {
            req.session.carrinho = [produto]
        }

        return res.redirect("/carrinho");

    },

    deleteProduct: (req, res) => {
        const {id} = req.params;
        let {carrinho} = req.session;
        const index = carrinho.findIndex(produto => produto.id == id);
        const carrinhoAtualizado = carrinho.splice(index, 1)
        carrinho = carrinhoAtualizado;
        if(carrinho.length <= 0) {
            carrinho = [];
            return res.redirect("/carrinho")
        }
        
        return res.redirect("/carrinho")

    }
}

module.exports = CarrinhoController;