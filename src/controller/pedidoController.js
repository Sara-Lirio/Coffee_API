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

      buscarPedidos: async (req, res) => {
        try {
          const resposta = await modelPedido.buscarTodosPedidos();
    
          if (resposta.status === 200) {
            res.status(resposta.status).json({
              pedidos: resposta.dados,
              erro: false,
            });
          } else {
            res.status(resposta.status).json({
              msg: resposta.mensagem,
              erro: true,
            });
          }
        } catch (error) {
          res.status(400).json({
            msg: error.message,
            erro: true,
          });
        }
      },

      buscarPedidoData: async (req, res) => {
        const dataPedido = req.params.dataPedido;
        try {
          const resposta = await modelPedido.buscarPedidoData(dataPedido);
    
          if (resposta.status === 200) {
            res.status(resposta.status).json({
              pedido: resposta.dados,
              erro: false,
            });
          } else {
            res.status(resposta.status).json({
              msg: resposta.mensagem,
              erro: true,
            });
          }
        } catch (error) {
          res.status(400).json({
            msg: error.message,
            erro: true,
          });
        }
      },

      buscarPedidoPeloNome: async (req, res) => {
        const nomeCliente = req.params.nomeCliente;
        try {
          const resposta = await modelPedido.buscarPedidoNome(nomeCliente);
    
          if (resposta.status === 200) {
            res.status(resposta.status).json({
              pedido: resposta.dados,
              erro: false,
            });
          } else {
            res.status(resposta.status).json({
              msg: resposta.mensagem,
              erro: true,
            });
          }
        } catch (error) {
          res.status(400).json({
            msg: error.message,
            erro: true,
          });
        }
      },
    
      buscarPedidoPeloCPF: async (req, res) => {
        const cpfCliente = req.params.cpfCliente;
    
        try {
          const resposta = await modelPedido.buscarPedidoCPF(cpfCliente);
    
          if (resposta.status === 200) {
            res.status(resposta.status).json({
              pedido: resposta.dados,
              erro: false,
            });
          } else {
            res.status(resposta.status).json({
              msg: resposta.mensagem,
              erro: true,
            });
          }
        } catch (error) {
          res.status(400).json({
            msg: error.message,
            erro: true,
          });
        }
      },
    
      buscarPedidoPeloID: async (req, res) => {
        const id = req.params.id;
        try {
          const resposta = await modelPedido.buscarPedidoId(id);
    
          if (resposta.status === 200) {
            res.status(resposta.status).json({
              pedido: resposta.dados,
              erro: false,
            });
          } else {
            res.status(resposta.status).json({
              msg: resposta.mensagem,
              erro: true,
            });
          }
        } catch (error) {
          res.status(400).json({
            msg: error.message,
            erro: true,
          });
        }
      },

      atualizaPedido: async (req, res) => {
        const id = req.params.id;
        const body = req.body;
    
        try {
          const pedidoAtualizado = await modelPedido.atualizarPedido(
            id,
            body.dataPedido,
            body.nomeCliente, 
            body.cpfCliente,
            body.formaDeEntrega, 
            body.valorTotal,
            body.statusPagamento,
            body.statusPedido
          );
          if (pedidoAtualizado.status != 200) throw pedidoAtualizado;
          res.status(pedidoAtualizado.status).json({
            msg: 'Pedido atualizado com sucesso',
            pedido: pedidoAtualizado.dados,
            erro: false,
          });
        } catch (error) {
          res.status(error.status).json({
            msg: error.mensagem,
            erro: true,
          });
        }
      },

      deletaPedido: async (req, res) => {
        const pedido = req.params.id;
        try {
          await PedidoValidacao._validaDeletePedido(
            pedido,
            modelPedido.removerPedido,
          );
          res.json({
            msg: 'Pedido deletado com sucesso',
            erro: false,
          });
        } catch (error) {
          res.status(404).json({
            msg: error.message,
            erro: true,
          });
        }
      },
}

export default pedidoController