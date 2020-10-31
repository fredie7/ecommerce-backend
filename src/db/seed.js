import dotenv from 'dotenv';
import UserModel from '../models/users';
import ProductModel from '../models/products';

dotenv.config();
// import img from '../../uploads/image-1604038157664.jpg'
// let retrievedImage = (product.image.split(''))
// let filteredImage = retrievedImage.splice(0,8,'http://localhost:5001/uploads/')
// let image = retrievedImage.join('')
const User = new UserModel();
const Product = new ProductModel()

const seedDatabase = async () => {
  const users = [
    {
      first_name: 'gabby',
      last_name: 'gabby',
      email: 'gabby@gmail.com',
      password: 'gabbypassword',
    },
    {
      first_name: 'tarik',
      last_name: 'tarik',
      email: 'tarik@gmail.com',
      password: 'tarikpassword',
    },
    {
      first_name: 'jizael',
      last_name: 'jizael',
      email: 'jizael@gmail.com',
      password: 'jizaelpassword',
    },
  ];

  const seedUsers = users.map(async (userData) => {
    const newUser = await User.create(userData);
    return newUser;
  })
  console.log('seeded users',seedUsers)
//   const insertedUsers = await Promise.all(seedUsers);

  const products = [
    {
    //   createdBy: insertedUsers[0].id,
      product_name: 'pizza',
      price: 20,
      quantity_in_stock: 19,
      description: 'pizza description',
      image: 'image',
    },
    {
    //   createdBy: insertedUsers[0].id,
      product_name: 'pizza',
      price: 20,
      quantity_in_stock: 19,
      description: 'pizza description',
      image: 'image',
    },
    {
    //   createdBy: insertedUsers[0].id,
      product_name: 'pizza',
      price: 20,
      quantity_in_stock: 19,
      description: 'pizza description',
      image: 'image',
    },
  ];
  const seedProducts = products.map(async (productData) => {
    const newProduct = await Product.create(productData);
    return newProduct;
  })
  console.log('seeded users',seedProducts)
//   const insertedUsers = await Promise.all(seedUsers);
};
export default seedDatabase;
