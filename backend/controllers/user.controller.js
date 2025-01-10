import userModel from '../models/user.model.js';
import {createUser} from '../services/user.service.js';
import { validationResult } from 'express-validator';
import * as userService from '../services/user.service.js';

export const createUsercontroller = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  try {
    const user = await createUser(req.body);

    const token = await user.generateJWT();
    delete user._doc.password;

    res.status(201).json({ user, token });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export const loginController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, password } = req.body;
    
    const user = await userModel.findOne({ email })
    console.log(user);

    if (!user) {
      return res.status(404).json({ errors: 'User not found'});
    }

    const isMatch = await user.isValidPassword(password);

    if (!isMatch) {
      return res.status(401).json({ errors: 'Invalid password'}); 
    }

    const token = await user.generateJWT();

    delete user._doc.password;

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export const profileController = async (req, res) => {
  console.log(req.user);

  res.status(200).json({user: req.user}); 
  
}

export const logoutController = async (req, res) => {
  try{
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    redisClient.set(token, 'logout', 'EX', 60 * 60 * 24);
    
    res.status(200).send('Logged out successfully');

  }catch(err){
    console.log(err);
    res.status(400).send(err.message);
  }
}

