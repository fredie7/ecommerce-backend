import { Pool } from 'pg';
import db, { connectionString } from './index';
import logger from '../dbLogger/logger';
import seedDatabase from './seed';
// import seedData from '../db/seed';
// import seedDatabase from '../db/seed';

const queryText = `
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS products;

CREATE TABLE IF NOT EXISTS users (
  "id" UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  "first_name" VARCHAR(100) NOT NULL,
  "last_name" VARCHAR(100) NOT NULL,
  "email" VARCHAR(100) UNIQUE NOT NULL,
  "password" VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
  "id" UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  "product_name" VARCHAR(100) NOT NULL,
  "price" INT NOT NULL,
  "quantity_in_stock" INT NOT NULL,
  "description" TEXT NOT NULL,
  "image" VARCHAR(300) UNIQUE NOT NULL
);
`;

const dBase = new Pool({ connectionString });

dBase.on('connect', ()=> {
  logger.info('CONNECTED TO DATABASE');
})

db.query(queryText)
  .then((result) => {
    logger.info(result);
    seedDatabase().then(() => {
      process.exit(0);
    });
  })
  .catch((error) => {
    logger.error(error);
    process.exit(1);
  });
