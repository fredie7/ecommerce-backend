import db from '../db';
require('dotenv').config();
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: 'dfr4t7fq3',
    api_key: '774194851589514',
    api_secret: 'PQqWaHT0NB2r0k9KbcU3jI7Vd2s',
})

const productController = {
    createProduct: async(req, res, next)=> {
        try {
            // console.log('req file', req.file)
            // const imageUpload = await cloudinary.uploader.upload(req.file);
            // console.log('image resp', imageUpload)
            const query = await db.query(
                "INSERT INTO products (product_name, price, quantity_in_stock, description, image) VALUES($1, $2, $3,$4,$5) returning*",
                [req.body.product_name, req.body.price, req.body.quantity_in_stock, req.body.description, req.file.path]
            )
           console.log(req.file)
            return res.status(201).json({ data: query.rows[0] });
        } catch (error) {
            console.log(error)
            return res.status(500).json({error: 'internal server error', stack: error});
        }
        next()
    },

    // createProduct: async (req, res)=> {
    //     console.log('before data:',req.body)
    //         const data = {
    //             product_name: req.body.product_name,
    //             price: req.body.price,
    //             quantity_in_stock: req.body.quantity_in_stock,
    //             description: req.body.description,
    //             image: req.image,
    //         }
    //         console.log('after data:',data)
    //         cloudinary.uploader.upload(data.image)
    //         .then(image=> {console.log('image',image)
    //             const query = db.query(
    //                 "INSERT INTO products (product_name, price, quantity_in_stock, description, image) VALUES($1, $2, $3, $4, $5) returning*",
    //                 [data.product_name, data.price, data.quantity_in_stock, data.description, image]
    //             )
    //             console.log(query)
    //             return res.status(201).json({ data: query.rows[0] });
    //         }).catch(error=> {
    //             console.log(error)
    //         })
    // },

    getAllProducts: async(req, res) => {
        try {
            const query = await db.query(
                "SELECT * FROM products"
            )
            return res.status(200).json({ data: query.rows })
        } catch (error) {
            return res.status(500).json({error: 'internal server error', stack: error});
        }
    },

    getOneProduct: async (req, res)=> {
        try {
            const query = await db.query(
                "SELECT * FROM products where id = $1",[req.params.id]
            )
            return res.status(200).json({ data: query.rows[0] })
        } catch (error) {
            return res.status(500).json({error: 'internal server error', stack: error});
        }
    }
}


export default productController;
