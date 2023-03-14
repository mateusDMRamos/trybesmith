import { Router } from 'express';
import ProductsController from '../controllers/product.controller';

const productRouter = Router();
const productsController = new ProductsController();

productRouter.post('/', productsController.setNew);

export default productRouter;