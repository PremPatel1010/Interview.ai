import jwt, { decode } from "jsonwebtoken";
import User from "../models/user.model.js";


export const authUser = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    
    if (!token) {
      return res.status(401).send({ error: 'Unauthorized User' });
    }

    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    const user = decoded;

    const userRecord = user.email ? await User.findOne({ email: user.email }).select('_id') : null;
    if (!userRecord) {
      return res.status(404).send({ error: 'User not found' });
    }
    const userId = userRecord._id.toString();
    req.userId = userId;
    console.log(userId)
    next();
  } catch (error) { 
    res.status(401).send({ error: 'Please authenticate.' });
  }

}