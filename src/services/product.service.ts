import connection from '../models/connection';
import ProductModel from '../models/product.model';
import IProductModel from '../interfaces/product.interface';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async setNew(product: Omit <IProductModel, 'id'>): Promise<IProductModel> {
    const newProduct = await this.model.create(product);
    return newProduct;
  }

  public async getAll(): Promise<IProductModel> {
    const allProducts = await this.model.getAll();
    return allProducts;
  }
}