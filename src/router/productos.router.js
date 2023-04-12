import { Router, json } from "express";
import ManagerProducto from "../Dao/managerProductoFs.js"

const managerProducto = new ManagerProducto()

const router = Router()

router.get("/producto", async (req, res) => {
    const productos = await managerProducto.getProduct()
    res.json({ message: "Productos desde fs ok", productos })
})

router.post("/producto", async (req, res) => {
    const producto = req.body
    const nuevoProducto = await managerProducto.addProduct(producto)
    res.json({ message: "producto creado", producto: nuevoProducto })
})

router.delete("/producto", async(req,res)=>{
const message =  await managerProducto.delateProduct()
res.json({message})
})

router.get("/producto/:idProducto", async (req,res )=>{
    const {idProducto}=req.params
    const producto =await managerProducto .getProductoById(+idProducto)
    res.json({producto})
})

router.delete("/producto/:idProducto", async (req ,res)=>{
    const {idProducto}=req.params
    const message =await managerProducto.delateProductById(+idProducto)
    res.json({message})
})
router.put("/producto/:idProducto", async(req,res)=>{
    const{idProducto}=req.params
    const productoup=req.body
    const producto= await managerProducto.upDateProduc(+idProducto,productoup)
    res.json({producto})
})


export default router