import dao from '../DAO/produtosDAO.js'

class Produtos {

    cadastroProduto = async (nomeProduto, imagem, descricao, valor, adicional) =>{
        try {
            const produto = this.criaProduto(nomeProduto, imagem, descricao, valor, adicional)
            const data = await dao.cadastrarProduto(produto)
            return {
                "dados": data,
                "status": 200
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }
}

export default Produtos