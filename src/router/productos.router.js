import { Router } from "express";
import ManagerProducto from "../Dao/managerProductoFs.js"

const managerProducto =new ManagerProducto()

const router =Router()

router.get("/", async(req,res)=>{
    const productos =await managerProducto.getProduct()
    res.json({message:"Productos desde fs", productos})
})

export default router