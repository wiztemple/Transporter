import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const verifyToken = (request, response, next) => {
  const token = request.body.token || request.headers['x-access-token'];
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) {
        return response.status(401).json({
          status: 'fail',
          message: 'unauthorized',
        });
      }
      request.decoded = decoded;
      return next();
    });
  }
  return response.status(401).json({
    status: 'fail',
    message: 'you are not authorized to ',
  });
};

export default verifyToken;
