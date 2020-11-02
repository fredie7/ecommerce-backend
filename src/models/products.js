import db from '../db';
import logger from '../dbLogger/logger';

class Products {
  async create(data) {
    const createProduct = `INSERT INTO products ("product_name", "price", "quantity_in_stock", "description", "image") 
      VALUES($1, $2, $3, $4, $5)
      returning *`;

    const values = [
      data.product_name,
      data.price,
      data.quantity_in_stock,
      data.description,
      data.image,
    ]

    try {
        const { rows } = await db.query(createProduct, values);
        return rows[0]; 
    } catch (error) {
        logger.error(error)
        return error
    }
  };

async getById(id) {
    const text = `SELECT * FROM products WHERE id = $1`;
    try {
        const { rows } = await db.query(text, [id]);
        return rows[0];
    } catch (error) {
        return error;
    }
};

async getByField(field, value) {
    const text =   `SELECT * FROM products WHERE '${field}' = $1`;
    try {
        const { rows } = await db.query(text, [value])
        return rows[0];
    } catch (error) {
        return error;
    }
}
      
}

export default Products;
