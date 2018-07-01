const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'transporter',
  password: 'root',
  port: 5432,
});

export default pool;
