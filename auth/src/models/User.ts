import { Schema, model, connect, Model } from 'mongoose';

interface IUser {
  email: string;
  password: string;
}

interface UserModel extends Model<any, IUser> {
  build(attrs: IUser): any;
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model<any, UserModel>('User', userSchema);

userSchema.statics.build = (attrs: IUser) => {
  return new User(attrs);
};

export { User };
