import db from "../database/db.js"

const daoProdutos = {
    cadastrarProduto: (produto) => {
        const ADD_PRODUTO = `
        INSERT INTO PRODUTOS (nomeProduto, imagem, descricao, valor, adicional)
        VALUES (?, ?, ?, ?, ?)
        `
        return new Promise((resolve, reject) => {
            db.run(ADD_PRODUTO,
                produto.nomeProduto,
                produto.imagem,
                produto.descricao,
                produto.valor,
                produto.adicional,
                (error) => {
                    if (error)
                        reject(error)
                    else
                        resolve(produto)
                }
            )
        })
    },

    menuProdutos: () => {
        const MENU_PRODUTOS = `
        SELECT * FROM PRODUTOS
        `
        return new Promise((resolve, reject) => {
            db.all(MENU_PRODUTOS, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    buscaProduto: (nomeProduto) => {
        const BUSCA_PRODUTO = `
        SELECT * FROM PRODUTOS
        WHERE nomeProduto = ?
        `
        return new Promise((resolve, reject) => {
            db.get(BUSCA_PRODUTO, nomeProduto, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    buscaProdutoId: (idProduto) => {
        const BUSCA_PRODUTOID = `
        SELECT * FROM PRODUTOS
        WHERE idProduto = ?
        `
        return new Promise((resolve, reject) => {
            db.get(BUSCA_PRODUTOID, idProduto, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    atualizaProduto : (idProduto, novoDado)=> {
        const ATUALIZA_PRODUTO = `
        UPDATE PRODUTOS 
        SET nomeProduto = ?, imagem = ?, descricao = ?, valor = ?, adicional = ?,
        WHERE idProduto = ?
        `
        return new Promise((resolve, reject)=> {
            db.run(ATUALIZA_PRODUTO, novoDado.nomeProduto, novoDado.imagem, novoDado.descricao, novoDado.valor, novoDado.adicional,
            idProduto, (error)=>{
                if (error)
                    reject(error)
                else
                    resolve(novoDado)
            })
        })
    },

    removeProduto : (idProduto) => {
        const DELETA_PRODUTO = `
        DELETE FROM PRODUTOS 
        WHERE idProduto = ?
        `
        return new Promise ((resolve, reject) => {
            db.run(DELETA_PRODUTO, idProduto, (error, row)=> {
                if (error)
                    reject (error)
                else
                    resolve (row)
            })
        })
    },
}

export default daoProdutos