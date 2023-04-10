import { Router } from "express";

const router =Router()

router.get("/",(req,res)=>{
    res.send("pagina inicial")
})

export default router