
import { Pool } from 'pg';
import config from '../config/config';

const pool = (process.NODE_ENV === 'production') ? new Pool(config.database) : new Pool(config.dev);

export default pool;
