import express from "express"
import cors from "cors"
import routerPedidos from "./routes/routerPedidos.js"
import routerProdutos from "./routes/routerProdutos.js"

const app = express ()

app.use(cors())
app.use(express.json())

routerPedidos(app)
routerProdutos(app)

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`http://localhost:${port}/`)
})

export default app