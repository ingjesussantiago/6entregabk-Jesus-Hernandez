import { Router } from "express";
import ManagerProducto from "../Dao/managerProductoFs.js"

const managerProducto = new ManagerProducto()

const router = Router()

router.get("/producto", async (req, res) => {
    const productos = await managerProducto.getProduct()
    res.json({ message: "Productos desde fs", productos })
})

router.post("/producto", async (req, res) => {
    const producto = req.body
    const nuevoProducto = await managerProducto.addProduct(producto)
    res.json({ message: "producto creado", producto: nuevoProducto })
})




export default router