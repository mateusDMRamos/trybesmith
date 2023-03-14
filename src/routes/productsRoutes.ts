import { Router } from 'express';
import ProductsController from '../controllers/product.controller';

const productRouter = Router();
const productsController = new ProductsController();

productRouter.post('/', productsController.setNew);
productRouter.get('/', productsController.findAll);

export default productRouter;