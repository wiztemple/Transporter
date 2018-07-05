import db from '../dbconnection/db';

export default class validateUsers {
  static async checkIfUserExists(request, response, done) {
    const { email } = request.body;
    const query = `SELECT * FROM users WHERE email = ${email}`;
    try {
      const queryResult = await db.query(query);
      if (queryResult.rows[0]) {
        return response.status(409).json({
          status: 'fail',
          message: 'user already registered',
        });
      }
      return done();
    } catch (error) {
      return response.status(500).json({
        status: 'fail',
        message: error.message,
      });
    }
  }
}
