import Pedido from "../model/pedidosModel"

const modelPedido = new Pedido ()

const pedidoController = {

    criarNovoPedido: async (req, res) => {
        const body = req.body;
    
        try {
          const resposta = await modelPedido.inserirPedido(
            body.dataPedido,
            body.nomeCliente, 
            body.cpfCliente,
            body.formaDeEntrega, 
            body.valorTotal,
            body.statusPagamento,
            body.statusPedido
          );
          if (resposta.status != 200) throw resposta;
          res.status(resposta.status).json({
            msg: 'Pedido inserido com sucesso',
            pedido: resposta.dados,
            erro: false,
          });
        } catch (error) {
          res.status(400).json({
            msg: error.mensagem,
            erro: true,
          });
        }
      },

}

export default pedidoController