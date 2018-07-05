import { Router } from 'express';
import AuthController from '../controllers/AuthController';

const authRoute = Router();

// sign up
authRoute.post('/signup', AuthController.signup);

// login
authRoute.post('/login', AuthController.login);

// all users
authRoute.get('/users', AuthController.getUsers);

export default authRoute;
