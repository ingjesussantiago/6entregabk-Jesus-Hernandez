import fs from "fs";
import { __dirname } from "../utils.js"

const path = __dirname + "productos.json"

export default class ManagerProducto {

    getProduct = async () => {
        if (fs.existsSync(path)) {
            try {
                const buscarProduct = await fs.promises.readFile(path, "utf-8")
                const productos = JSON.parse(buscarProduct)
                return productos
            } catch (error) {
                console.log(error);
            }

        } else {
            console.log("no hay archivo")
            return []

        }
    }

    addProduct = async (producto) => {
        try {
             const productos = await this.getProduct()
            const id = this.#generarId(productos)
            const nuevoProducto = { id, ...producto }
            productos.push(nuevoProducto)

            await fs.promises.writeFile(path, JSON.stringify(productos))
            return nuevoProducto
        } catch (error) {
            console.log(error);
        }
           
      

    }

    getProductoById = async (id) => {
        try {
            const productos = await this.getProduct()
            const productoId = productos.find(u => u.id === id)
            if (productoId) {
                return productoId
            } else {
                return "producto no existe"
            }
        } catch (error) {
            console.log(error);
        }

    }

    upDateProduc = async (id, obj) => {
        try {
            const productos = await this.getProduct()
            const indexProductos = productos.findIndex((u) => u.id === id)
            if (indexProductos === -1) {
                return "no encontrado"
            }

            const productoActualizado = { ...productos[indexProductos], ...obj }
            productos.splice(indexProductos, 1, productoActualizado)
            await fs.promises.writeFile(this.path, JSON.stringify(productos))

        } catch (error) {
            console.log(error);
        }

    }

    delateProduct = async () => {
        if (fs.existsSync(path)) {
            try {
                await fs.promises.unlink(path)
                return "archivo eliminado"

            } catch (error) {
                console.log(error)
            }

        } else {
            return "este archivo no existe"
        }

    }

    delateProductById = async (id) => {
        try {
            const productos = await this.getProduct()
            const arrayNew = productos.filter((u) => u.id !== id)
            console.log(arrayNew);
            await fs.promises.writeFile(this.path, JSON.stringify(arrayNew))
        } catch (error) {
            console.log(error)
        }



    }

    #generarId = (productos) => {
        try {
            let id
            if (productos.length === 0) {
                id = 1
            } else {
                id = productos[productos.length - 1].id + 1
            }
            return id
        } catch (error) {
            console.log(error)
        }
    }

}

