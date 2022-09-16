import dao from '../DAO/produtosDAO.js'

class Produtos {

    cadastroProduto = async (nomeProduto, imagem, descricao, valor, adicional) => {
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

    menuProdutos = async () => {
        try {
            const data = await dao.menuProdutos()
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

    buscaProduto = async (nomeProduto) => {
        try {
            const data = await dao.buscaProduto(nomeProduto)
            if (data) {
                return {
                    "dados": data,
                    "status": 200
                }
            } else {
                return {
                    "mensagem": ` ${nomeProduto} não encontrado`,
                    "status": 404
                }
            }
        } catch (error) {
            return {
                "dados": error.message,
                "status": 400
            }
        }
    }

    buscaProdutoId = async (idProduto) => {
        try {
            const data = await dao.buscaProdutoId(idProduto)
            if (data) {
                return {
                    "dados": data,
                    "status": 200
                }
            } else {
                return {
                    "mensagem": `ID ${idProduto} não encontrado`,
                    "status": 404
                }
            }
        } catch (error) {
            return {
                "dados": error.message,
            }
        }
    }
}

export default Produtos