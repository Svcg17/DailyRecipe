import mongoose from 'mongoose';
import { isEmail } from 'validator';

const { Schema } = mongoose;
const UserSchema = new Schema(
  {
    name: { type: String, required: [true, 'Name is required'] },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      validate: [isEmail, 'Invalid email'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 8,
    },
    recipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  }, {
    timestamps: true,
  },
);

const User = mongoose.model('User', UserSchema);
export default User;