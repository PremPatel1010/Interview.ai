import { Router } from "express";
import { body } from "express-validator";
import * as userController from '../controllers/user.controller.js'
import * as authMiddleware from '../middleware/auth.middleware.js'

const router = Router();


router.post('/register', 
  body('email').isEmail().withMessage('Email must be a valid email address.'),
  body('password').isLength({ min: 6, max: 50 }).withMessage('Password must be at least 6 characters and at most 50 characters.'),
  userController.createUsercontroller);

router.post('/login', 
  body('email').isEmail().withMessage('Email must be a valid email address.'),
  body('password').isLength({ min: 6, max: 50 }).withMessage('Password must be at least 6 characters and at most 50 characters.'),
  userController.loginController
)

router.get('/profile', authMiddleware.authUser , userController.profileController);

router.get('/logout', authMiddleware.authUser, userController.logoutController);



export default router;