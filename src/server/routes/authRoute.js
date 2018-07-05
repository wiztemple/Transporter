import { Router } from 'express';
import Validation from '../middlewares/validation';
// import validateUsers from '../middlewares/validateUsers';

import AuthController from '../controllers/AuthController';

const authRoute = Router();

// sign up
authRoute.post('/signup', Validation.userCreation, Validation.checkEmail, AuthController.signup);

// login
authRoute.post('/login', AuthController.login);

// all users
authRoute.get('/users', AuthController.getUsers);

export default authRoute;
