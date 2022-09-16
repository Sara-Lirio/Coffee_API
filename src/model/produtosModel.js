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

    atualizaProduto = async (idProduto, nomeProduto, imagem, descricao, valor, adicional) => {
        try {
            const novoDado = this.criaProduto(nomeProduto, imagem, descricao, valor, adicional)
            const produtoAtual = await this.buscaProdutoId(idProduto)
            if (produtoAtual) {
                const produtoAtualizado = {
                    "nomeProduto": novoDado.nomeProduto || produtoAtual.dados.nomeProduto,
                    "imagem": novoDado.imagem || produtoAtual.dados.imagem,
                    "descricao": novoDado.descricao || produtoAtual.dados.descricao,
                    "valor": novoDado.valor || produtoAtual.dados.valor,
                    "adicional": novoDado.adicional || produtoAtual.dados.adicional                  
                }
                const data = await dao.atualizaProduto(idProduto, produtoAtualizado)
                return {
                    "dados": data,
                    "status": 200
                }
            } else {
                throw new Error("Produto não encontrado")
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }

    criaProduto = (nomeProduto, imagem, descricao, valor, adicional) => {

        return {
            "nomeProduto": nomeProduto,
            "imagem": imagem,
            "descricao": descricao,
            "valor": valor,
            "adicional": adicional
        }
    }

    removeProdutos = async (idProduto) =>{
        try {
            const data = await dao.removeProduto(idProduto)
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
                "status": 400
            }
        }
    }
}

export default Produtos