import { Router } from 'express';
import OrderController from '../controllers/order.controllers';

const orderRouter = Router();
const orderController = new OrderController();

orderRouter.get('/', orderController.getAll);

export default orderRouter;