import dotenv from 'dotenv';

dotenv.config();

const config = {};

config.test = {
  user: process.env.TEST_DB_USER,
  host: process.env.TEST_DB_HOST,
  database: process.env.TEST_DB_NAME,
  password: process.env.TEST_DB_PASSWORD,
  port: process.env.TEST_DB_PORT,
};
config.database = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

config.secret = 'sullivan';

export default config;
