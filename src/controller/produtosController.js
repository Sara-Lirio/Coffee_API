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
                produto: resposta.dados,
                erro: false,
            });
        } catch (error) {
            res.status(resposta.status).json({
                msg: error.message,
                erro: true,
            });
        }
    },

    menuProdutos: async (req, res) => {
        try {
            const resposta = await modelProdutos.menuProdutos();

            res.status(resposta.status).json({
                produtos: resposta.dados,
                erro: false,
            });
        } catch (error) {
            res.status(resposta.status).json({
                msg: error.message,
                erro: true,
            });
        }
    },

    buscaProduto: async (req, res) => {
        try {
            const nomeProduto = req.params.nomeProduto;
            const resposta = await modelProdutos.buscaProduto(nomeProduto);

            if (resposta.status === 200) {
                res.status(resposta.status).json({
                    nomeProduto: resposta.dados,
                    erro: false,
                });
            } else {
                res
                    .status(resposta.status)
                    .json({ mensagem: resposta.mensagem, erro: true });
            }
        } catch (error) {
            res.status(resposta.status).json({
                msg: error.message,
                erro: true,
            });
        }
    },

    buscaProdutoId: async (req, res) => {
        try {
            const idProduto = req.params.idProduto;
            const resposta = await modelProdutos.buscaProdutoId(idProduto);

            if (resposta.status === 200) {
                res.status(resposta.status).json({
                    titulo: resposta.dados,
                    erro: false,
                });
            } else {
                res
                    .status(resposta.status)
                    .json({ mensagem: resposta.mensagem, erro: true });
            }
        } catch (error) {
            res.status(resposta.status).json({
                msg: error.message,
                erro: true,
            });
        }
    },

    atualizaProduto: async (req, res) => {
        const idProduto = req.params.idProduto;
        const body = req.body;
        try {
            const resposta = await modelProdutos.atualizaProduto(
                idProduto,
                body.nomeProduto,
                body.imagem,
                body.descricao,
                body.valor,
                body.adicional
            );

            if (resposta.status !== 200) throw resposta;
            res.status(resposta.status).json({
                msg: 'O produto foi atualizado com sucesso',
                produto: resposta.dados,
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

export default produtosController