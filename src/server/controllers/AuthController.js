import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../dbconnection/dbconnect';

export default class AuthController {
  static async signup(request, response) {
    const {
      firstname, lastname, email, phone, password,
    } = request.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const query = `INSERT INTO users (firstname, lastname, phone email, password) VALUES ('${firstname}','${lastname}', '${email}', '${phone}','${hashedPassword}') RETURNING *`;
    try {
      const result = await pool.query(query);
      const token = jwt.sign(
        { id: result.rows[0].id },
        process.env.JWT_SECRET,
        { expiresIn: 86400 },
      );
      return response.status(201).json({
        status: 'success',
        message: 'Account successfully created',
        user: {
          token,
          firstname: result.rows[0].firstname,
          lastname: result.rows[0].lastname,
          email: result.rows[0].email,
          phone: result.rows[0].id,
        },
      });
    } catch (error) {
      return response.status(500).json({
        status: 'error',
        message: error.stack,
      });
    }
  }
}
