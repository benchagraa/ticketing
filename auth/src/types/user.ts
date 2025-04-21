import { Document, Model } from 'mongoose';

export interface IUser {
  email: string;
  password: string;
}

export interface IUserDocument extends Document, IUser {
  comparePassword(password: string): Promise<boolean>;
}

export interface IUserModel extends Model<IUserDocument> {}
