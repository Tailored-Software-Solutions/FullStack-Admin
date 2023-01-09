import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    city: {
      type: String,
      required: true,
      min: 3,
      max: 80,
    },
    state: {
      type: String,
      required: false,
      min: 2,
      max: 3,
    },
    country: {
      type: String,
      required: false,
      max: 50,
      default: 'Australia',
    },
    occupation: {
      type: String,
      required: false,
      max: 50,
    },
    phoneNumber: {
      type: String,
      required: false,
      max: 15,
    },
    transactions: Array,
    role: {
      type: String,
      enum: ['user', 'admin', 'superadmin'],
      default: 'admin',
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);
export default User;
