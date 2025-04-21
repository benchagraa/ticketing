import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import { IUserDocument, IUserModel } from '../types/user';

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

UserSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

const User = model<IUserDocument, IUserModel>('User', UserSchema);

export default User;
