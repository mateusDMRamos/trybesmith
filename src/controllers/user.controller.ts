import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UsersController {
  constructor(private userService = new UserService()) {}

  public setNewUser = async (req: Request, res: Response) => {
    const token = await this.userService.setNew(req.body);
    res.status(201).json({ token });
  };
}