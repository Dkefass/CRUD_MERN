import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import productRoutes from "./routers/products.router.js";
import path from "path"


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json())

app.use('/api/products',productRoutes)

const __dirname =path.resolve();

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist")));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
    })
}





app.listen(PORT,() => {
     
    console.log("server load at localhost://"+PORT)
    console.log(process.env.MONGO_URI)
    connectDB()
})



