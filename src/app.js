import express from "express"
import { __dirname } from "./utils.js"
import handlebars from "express-handlebars"
import productosRouter from "./router/productos.router.js"
import managerProducto from "./Dao/managerProductoFs.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(express.static(__dirname + "public"))

app.engine("handlebars",handlebars.engine())
app.set("views",__dirname + "/views")
app.set("view engine", "handlebars")



app.use("/", productosRouter)



app.listen(8080, (req, res) => {
    console.log("Desde el puerto 8080")
})