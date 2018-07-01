import express from 'express';
import bodyParser from 'body-parser';
import logger from 'volleyball';
import dotenv from 'dotenv';
import authRoute from './server/routes/authRoute';

dotenv.config();

const app = express();
const port = process.env.PORT || 7000;
// Log out requests
app.use(logger);
//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Request routes
app.get('/', (request, response) => response.status(200).json({
  message: 'Welcome to The-Transporter....Time is of the essence',
}));
// Authentication route
app.use('/api/v1/auth', authRoute);

app.listen(port, () => {
  // eslint-disable-next-line
    console.log(`App is is Listening on port  ${port}`)
});

export default app;
