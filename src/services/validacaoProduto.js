import daoProdutos from '../DAO/produtosDAO.js';

const ProdutosValidacao = {
  _validaDeletaProdutos: async (idProduto, callback) => {
    const produto = await daoProdutos.buscaProdutoId(idProduto);
    if (produto == undefined) {
      throw new Error('ID não encontrado');
    } else {
      await callback(idProduto);
      return produto;
    }
  },
};

export default ProdutosValidacao;
