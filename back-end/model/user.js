import { Schema, model } from 'mongoose';
import { handleMongooseError } from '../helpers/handleMongooseError.js';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Set password for user'],
    },
    // token: {
    //   type: String,
    // },
    // avatarUrl: {
    //   type: String,
    //   required: true,
    // },
    // isVerified: {
    //   type: Boolean,
    //   default: false,
    //   required: true,
    // },
    // verificationToken: {
    //   type: String,
    //   required: [true, 'Verify token is required'],
    // },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post('save', handleMongooseError);

export const User = model('user', userSchema);
