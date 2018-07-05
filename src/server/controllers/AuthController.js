import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../dbconnection/db';

export default class AuthController {
  static async signup(request, response) {
    const {
      firstname, lastname, email, password,
    } = request.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const query = `INSERT INTO users (firstname, lastname, email, password) VALUES ('${firstname}','${lastname}', '${email}','${hashedPassword}') RETURNING *`;
    try {
      const result = await db.query(query);
      const token = jwt.sign(
        { id: result.rows[0].id },
        process.env.JWT_SECRET,
        { expiresIn: 86400 },
      );
      return response.status(201).json({
        status: 'success',
        message: 'Account successfully created',
        user: {
          id: result.rows[0].id,
          token,
          firstname: result.rows[0].firstname,
          lastname: result.rows[0].lastname,
          email: result.rows[0].email,
        },
      });
    } catch (error) {
      return response.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  static async login(request, response) {
    const { email, password } = request.body;
    const query = `SELECT * FROM users WHERE email = '${email}'`;
    try {
      const result = await db.query(query);
      const validPassword = bcrypt.compareSync(password.trim(), result.rows[0].password);
      if (result.rowCount === 0 || !validPassword) {
        return response.status(401).json({
          status: 'fail',
          message: 'password or email is incorrect',
        });
      }
      const token = jwt.sign(
        { id: result.rows[0].id },
        process.env.JWT_SERCRET,
        { expiresIn: 86400 },
      );
      return response.status(200).json({
        status: 'success',
        message: 'user successfully signed in',
        token,
      });
    } catch (error) {
      return response.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  static async getUsers(request, response) {
    const query = 'SELECT * FROM users';
    try {
      const result = await db.query(query);
      if (!result) {
        return response.status(404).json({
          status: 'fail',
          message: 'Not found',
        });
      }
      return response.status(200).json({
        status: 'success',
        message: 'All users',
        users: result.rows,
      });
    } catch (error) {
      return response.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  }
}
