import pedidos from '../controller/pedidoController.js'

const routerPedidos = (app)=> {

    app.get('/pedidos', pedidos.buscarPedidos)
    app.get('/pedidos/dataPedido/:dataPedido', pedidos. buscarPedidoData)
    app.get('/pedidos/nomeCliente/:nomeCliente', pedidos.buscarPedidoPeloNome)
    app.get('/pedidos/cpfCliente/:cpfCliente', pedidos.buscarPedidoPeloCPF)
    app.get('/pedidos/id/:id', pedidos.buscarPedidoPeloID)

    app.post('/pedidos', pedidos.criarNovoPedido)

    app.delete('/pedidos/id/:id', pedidos.deletaPedido)

    app.put('/pedidos/id/:id', pedidos.atualizaPedido)
}

export default routerPedidos 
