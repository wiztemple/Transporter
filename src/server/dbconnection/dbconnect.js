import { Pool } from 'pg';
import config from '../config/config';

const pool = new Pool({
  user: config.dev.user,
  host: config.dev.host,
  database: config.dev.database,
  password: config.dev.password,
  port: config.dev.port,
});

export default pool;
