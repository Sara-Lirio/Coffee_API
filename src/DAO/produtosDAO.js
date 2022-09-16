const daoProdutos = {
    cadastrarProduto: (produto)=>{
        const ADD_PRODUTO = `
        INSERT INTO PRODUTOS (nomeProduto, imagem, descricao, valor, adicional)
        VALUES (?, ?, ?, ?, ?)
        `
        return new Promise((resolve, reject)=>{
            db.run(ADD_PRODUTO, 
                produto.nomeProduto, 
                produto.imagem, 
                produto.descricao, 
                produto.valor, 
                produto.adicional,
                (error)=>{
                    if(error)
                        reject(error)
                    else
                        resolve(produto)
                }
            )
        })
    },

}

export default daoProdutos