import produtosController from "../controller/produtosController.js"

const routerProdutos = (app)=> {

    app.get('/produtos', produtosController.menuProdutos)
    app.get('/produtos/nomeProduto/:nomeProduto', produtosController.buscaProduto)
    app.get('/produtos/idProduto/:idProduto', produtosController.buscaProdutoId)

    app.post('/produtos', produtosController.cadastroNovoProduto)

    app.delete('/produtos/idProduto/:idProduto', produtosController.removeProduto)

    app.put('/produtos/idProduto/:idProduto', produtosController.atualizaProduto)
}

export default routerProdutos