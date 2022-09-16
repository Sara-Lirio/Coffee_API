import Produtos from "../model/produtosModel"

const modelProdutos = new Produtos()

const produtosController = {
    cadastroNovoProduto: async (req, res) => {
        const body = req.body;
    
        try {
          const resposta = await modelProdutos.cadastroProduto(
            body.nomeProduto,
            body.imagem, 
            body.descricao, 
            body.valor,
            body.adicional
          );
    
          res.status(resposta.status).json({
            msg: 'Cadastro realizado com sucesso',
            bebida: resposta.dados,
            erro: false,
          });
        } catch (error) {
          res.status(resposta.status).json({
            msg: error.message,
            erro: true,
          });
        }
      },
}

export default produtosController