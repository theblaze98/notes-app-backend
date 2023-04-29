import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    username: { type: String, required: true, trim: true, unique: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, select: false }
  },
  {
    timestamps: true
  }
);

export default model('user', UserSchema);
