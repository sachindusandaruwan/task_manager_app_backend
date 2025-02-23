import express from 'express';
import {User} from "../model/User";
import {signInUser, signUpUser} from "../controller/auth-controller";


const router = express.Router();

// Create a new user
router.post('/register', signUpUser);

// Get all users
router.post('/signIn', signInUser);



export default router;
