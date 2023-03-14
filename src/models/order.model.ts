import { Pool } from 'mysql2/promise';
import IOrderModel from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrderModel[]> {
    const [rows] = await this.connection.execute(`
    SELECT o.id, o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.orders AS o 
    LEFT JOIN Trybesmith.products AS p
    ON o.id = p.order_id
    GROUP BY o.id`);
    return rows as IOrderModel[];
  }
}