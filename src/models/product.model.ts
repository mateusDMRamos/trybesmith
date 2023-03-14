import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
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

  public async getAll(): Promise<IProductModel> {
    const [products] = await this.connection.execute<RowDataPacket[] & IProductModel>(
      'SELECT * FROM Trybesmith.products',
    );
    return products;
  }
}