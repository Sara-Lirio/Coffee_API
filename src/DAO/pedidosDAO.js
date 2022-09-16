const daoPedidos = {

    pegaTodosPedidos : ()=> {
    const PEGAR_TODOS_PEDIDOS = `
    SELECT * FROM PEDIDOS
    `
    return new Promise((resolve, reject)=> {
        db.all(PEGAR_TODOS_PEDIDOS, (error, row)=> {
            if (error)
                reject(error)
            else
                resolve(row)
        })
    })

    },


}

export default daoPedidos