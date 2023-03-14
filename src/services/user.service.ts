import jwt from 'jsonwebtoken';
import IUserModel from '../interfaces/user.interface';
import connection from '../models/connection';
import UserModel from '../models/user.model';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  private signToken = (id: number): string => {
    const token = jwt.sign({ data: { userId: id } }, 'segredo', {
      expiresIn: '7d',
      algorithm: 'HS256',
    });
    return token;
  };

  public async setNew(user: IUserModel): Promise<string> {
    const id = await this.model.create(user);
    const token = this.signToken(id);
    return token;
  }
}