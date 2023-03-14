import express from 'express';
import orderRouter from './routes/ordersRoutes';
import productRouter from './routes/productsRoutes';
import usersRouter from './routes/usersRoutes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', usersRouter);
app.use('/orders', orderRouter);
export default app;
