import express from 'express';
import authControllers from '../controllers/auth';
import signupValidation from '../middlewares/validators/signupValidator'
import signinValidation from '../middlewares/validators/signinValidator'

const router = express.Router();
const { signupValidator } = signupValidation;
const { signinValidator } = signinValidation;


const { signup, signin } = authControllers;

router.post('/signup', signupValidator, signup);
router.post('/signin', signinValidator ,signin);

module.exports = router;