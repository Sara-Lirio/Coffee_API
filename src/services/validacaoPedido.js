import daoPedido from '../DAO/pedidosDAO.js';

const PedidoValidacao = {
  _validaDeletePedido: async (id, callback) => {
    const pedido = await daoPedido.pegaPedidoPeloId(id);
    if (pedido == undefined) {
      throw new Error('ID não encontrado');
    } else {
      await callback(id);
      return pedido;
    }
  },
};

export default PedidoValidacao;
