import express from 'express';
import multer from 'multer';
import { getParsedResume, uploadResume } from '../controllers/resume.controller.js';
import { authUser } from '../middleware/auth.middleware.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req,file,cb) => {
    cb(null, "uploads/");
  },
  filename: (req,file,cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName); 
  }
})

const upload = multer({storage});

router.post('/upload', authUser ,upload.single("resume"), uploadResume);
router.get('/', authUser, getParsedResume);



export default router;