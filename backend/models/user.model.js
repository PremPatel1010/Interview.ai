import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({ 
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: [6, 'Email must be at least 6 characters.'],
    maxLength: [50, 'Email must be at most 50 characters.'],
  },
  password: {
    type: String,
  },

 });


UserSchema.statics.hashPassword = async function(password) {
  return await bcrypt.hash(password, 10);
}

UserSchema.methods.isValidPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
}

UserSchema.methods.generateJWT = function () {
  return jwt.sign({ email: this.email }, process.env.JWT_SECRET, { expiresIn: '24h' });
}

const User = mongoose.model('User', UserSchema);

export default User;