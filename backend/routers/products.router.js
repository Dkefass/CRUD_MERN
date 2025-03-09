import express from "express"
import { getAllProduct,updateProduct,deleteProduct,createProduct} from "../controllers/product.controller.js";

const router = express.Router()

router.get('/',getAllProduct)

router.put('/:id',updateProduct )
router.delete('/:id',deleteProduct)

router.post('/',createProduct)

export default router;