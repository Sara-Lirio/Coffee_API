import db from "../database/db.js"

const daoPedidos = {

    inserePedido: (pedido) => {
        const INSERE_PEDIDO = `
        INSERT INTO PEDIDOS (dataPedido, nomeCliente, cpfCliente, formaDeEntrega, valorTotal, statusPagamento, statusPedido)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        `
        return new Promise((resolve, reject) => {
            db.run(INSERE_PEDIDO, pedido.dataPedido, pedido.nomeCliente, pedido.cpfCliente,
                pedido.formaDeEntrega, pedido.valorTotal, pedido.statusPagamento, pedido.statusPedido,
                (error) => {
                    if (error)
                        reject(error)
                    else
                        resolve(pedido)
                })
        })
    },

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

    pegaPedidoPeloCPF: (cpfCliente) => {
        const PEGA_PEDIDO_CPF = `
        SELECT * FROM PEDIDOS
        WHERE cpfCliente = ?
        `
        return new Promise((resolve, reject) => {
            db.get(PEGA_PEDIDO_CPF, cpfCliente, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    pegaPedidoPeloId: (id) => {
        const PEGA_PEDIDO_ID = `
        SELECT * FROM PEDIDOS
        WHERE id = ?
        `
        return new Promise((resolve, reject) => {
            db.get(PEGA_PEDIDO_ID, id, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    atualizarPedido: (id, novoPedido) => {
        const ATUALIZA_PEDIDO = `
        UPDATE PEDIDOS 
        SET dataPedido = ? , nomeCliente = ? , cpfCliente = ?, formaDeEntrega = ? ,
        valorTotal = ? , statusPagamento = ? , statusPedido = ? 
        WHERE id = ?
        `
        return new Promise((resolve, reject) => {
            db.run(ATUALIZA_PEDIDO,
                novoPedido.dataPedido, novoPedido.nomeCliente, novoPedido.cpfCliente, novoPedido.formaDeEntrega,
                novoPedido.valorTotal, novoPedido.statusPagamento, novoPedido.statusPedido,
                id,
                (error) => {
                    if (error)
                        reject(error)
                    else
                        resolve(novoPedido)
                })
        })
    },

    removePedido: (id) => {
        const DELETA_PEDIDO = `
        DELETE FROM PEDIDOS
        WHERE id = ?
        `
        return new Promise((resolve, reject) => {
            db.run(DELETA_PEDIDO, id, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    }

}

export default daoPedidos