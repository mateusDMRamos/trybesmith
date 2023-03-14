import { Router } from 'express';
import UsersController from '../controllers/user.controller';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', usersController.setNewUser);

export default usersRouter;