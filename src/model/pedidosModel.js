import dao from '../DAO/pedidosDAO.js'
class Pedido {
    constructor (dataPedido, nomeCliente, cpfCliente, formaDeEntrega, valorTotal, statusPagamento, statusPedido)

    
    buscarTodosPedidos = async () => {
        try {
          const data = await dao.pegaTodosPedidos();
          return {
            dados: data,
            tamanho: data.length,
            status: 200,
          };
        } catch (error) {
          return {
            mensagem: error.message,
            status: 400,
          };
        }
      };
    


}

export default Pedido