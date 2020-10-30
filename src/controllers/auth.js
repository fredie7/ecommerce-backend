import db from '../db';
import hashPassword from '../services/hash';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const jwtExpiryTime = 3600;

const authControllers = {
    signup: async(req,res)=> {
        try {
            const query = await db.query(
                'SELECT * FROM  users WHERE email = $1',[req.body.email]
            );
            const userExists = query.rows[0];
            if (userExists) {
                return res.status(401).json({ error: 'user already exists' });
            }
            const newUser = await db.query(
                'INSERT INTO users(first_name, last_name, email, password) VALUES ($1, $2, $3, $4) returning*',
                [req.body.first_name, req.body.last_name, req.body.email, hashPassword(req.body.password)]
                )
            return res.status(201).json({data: newUser.rows[0]})
        } catch (error) {
            return res.status(500).json({error: 'internal server error', stack: error});
        }
    },

    signin: async (req,res)=> {
        try {
            const query = await db.query(
                'SELECT * FROM users WHERE email = $1',[req.body.email]
            )
            const  { password } = req.body;
            const existingUser = query.rows[0]
            const isCorrectPassword = existingUser && bcrypt.compareSync(password, existingUser.password,(err,res)=> {
               
            });
            if (!isCorrectPassword) {
                return res.status(401).json({message: 'password does not match'})
            }
            const { id, first_name } = existingUser;
            const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                expiresIn: jwtExpiryTime
            });
            return res.status(200).json({ id, first_name, token })
        } catch (error) {
            return res.status(500).json({error: 'internal server error', stack: error});
        }
    },
}

export default authControllers;