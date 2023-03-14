import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductsController {
  constructor(private productService = new ProductService()) {}

  public setNew = async (req: Request, res: Response) => {
    const product = req.body;
    const newProduct = await this.productService.setNew(product);
    res.status(201).json(newProduct);
  };

  public findAll = async (_req: Request, res: Response) => {
    const allProducts = await this.productService.getAll();
    res.status(200).json(allProducts);
  };
}