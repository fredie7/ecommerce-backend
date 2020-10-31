import { Pool } from 'pg';
import dotenv from 'dotenv';
import logger from '../dbLogger/logger';

dotenv.config();

// this should be made dynamic based on the environment
// development, test, production
const connectionString = process.env.DATABASE_DEV_URL;
logger.info(`NODE_environment: ${process.env.NODE_ENV}`)

const db = new Pool({ connectionString });

// this was the missing piece.
// the database connection was not being established
// hence, the 'on connect' event below wasn't triggered
db.connect();

db.on('connect', () => {
  logger.info('connected to the database');
  console.log('connected to the database');
});

db.on('error', () => {
  logger.info('failed to connect to the database');
  console.log('failed to connect to the database');
});

export { connectionString };
export default db;



// const { Pool } = require('pg')
// require('dotenv').config();

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL_URL,
//   ssl: process.env.NODE_ENV === "production" ? true: false
// });

// pool.on('connect', () => {
//   console.log('connected');
// });
// pool.on('error', () => {
//   console.log('failed to connect');
// });

// module.exports = {
//   query: (text, params) => pool.query(text, params),
// }