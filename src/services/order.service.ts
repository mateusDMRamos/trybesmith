import OrderModel from '../models/order.model';
import IOrderModel from '../interfaces/order.interface';
import connection from '../models/connection';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<IOrderModel[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}