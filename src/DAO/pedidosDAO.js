const daoPedidos = {

    pegaTodosPedidos: () => {
        const PEGAR_TODOS_PEDIDOS = `
        SELECT * FROM PEDIDOS
        `
        return new Promise((resolve, reject) => {
            db.all(PEGAR_TODOS_PEDIDOS, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    pegaPedidoPelaData: (dataPedido) => {
        const PEGA_PEDIDO_DATA = `
        SELECT * FROM PEDIDOS 
        WHERE dataPedido = ?
        `
        return new Promise((resolve, reject) => {
            db.get(PEGA_PEDIDO_DATA, dataPedido, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    pegaPedidoPeloNome: (nomeCliente) => {
        const PEGA_PEDIDO_NOME = `
        SELECT * FROM PEDIDOS 
        WHERE nomeCliente = ?
        `
        return new Promise((resolve, reject) => {
            db.get(PEGA_PEDIDO_NOME, nomeCliente, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    pegaPedidoPeloCPF : (cpfCliente)=> {
        const PEGA_PEDIDO_CPF = `
        SELECT * FROM PEDIDOS
        WHERE cpfCliente = ?
        `
        return new Promise((resolve, reject)=> {
            db.get(PEGA_PEDIDO_CPF, cpfCliente, (error, row)=> {
                if (error) 
                    reject(error)
                else 
                    resolve(row)
            })
        })
    },

    pegaPedidoPeloId : (id)=> {
        const PEGA_PEDIDO_ID = `
        SELECT * FROM PEDIDOS
        WHERE id = ?
        `
        return new Promise((resolve, reject)=> {
            db.get(PEGA_PEDIDO_ID, id, (error, row)=> {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

}

export default daoPedidos