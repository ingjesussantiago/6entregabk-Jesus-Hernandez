import express from "express"
import { __dirname } from "./utils.js"
import inicioRouter from "./router/inicio.router.js"


const app = express()

app.use(express.json())

app.use("/",inicioRouter)



app.listen(8080,(req,res)=>{
    console.log("Desde el puerto 88080")
})