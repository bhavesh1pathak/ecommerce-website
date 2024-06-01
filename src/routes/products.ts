import express from 'express';
import { adminOnly } from '../middlewares/auth.js';
import { deleteProduct, getAdminProducts, getAllCategories, getAllProducts, getSingleProduct, getlatestProducts, newProduct, updateProduct } from '../controllers/product.js';
import { singleUpload } from '../middlewares/multer.js';

const app = express.Router();

// create New Product -  api/v1/product/new
app.post("/new" ,adminOnly,singleUpload, newProduct);


// to get All products with filter-  api/v1/product/all
app.get("/all" ,getAllProducts); 

// to get last 10 product -  api/v1/product/latest
app.get("/latest" ,getlatestProducts); 

// to get all unique categories  -  api/v1/product/categories
app.get("/categories" ,getAllCategories);

// to get all products -  api/v1/user/admin-product
app.get("/admin-products" ,adminOnly,getAdminProducts);

// to get update and delete product
app.route("/:id")
.get(getSingleProduct)
.put(adminOnly,singleUpload,updateProduct)
.delete(adminOnly, deleteProduct)
export default app;