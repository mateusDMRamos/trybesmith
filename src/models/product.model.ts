import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProductModel from '../interfaces/product.interface';

type NewProduct = Omit <IProductModel, 'id'>;

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: NewProduct): Promise<IProductModel> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return ({ id: insertId, name, amount });
  } 
}