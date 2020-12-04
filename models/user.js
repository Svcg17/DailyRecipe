import mongoose from 'mongoose';
import validator from 'validator';

const { Schema } = mongoose;
const UserSchema = new Schema(
  {
    name: { type: String, required: [true, 'Name is required'] },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      validate: [validator.isEmail, 'Invalid email'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 8,
    },
    address: String,
    plan: { type: Schema.Types.ObjectId, ref: 'Plan', required: false },
    address: String,
    phone: {
      type: String,
      validate: {
        validator: function(phoneNum) {
          validator.isMobilePhone(phoneNum, 'en-US');
        },
        message: 'Must be a valid phone number',
      }
    },
    points: Number,
    paymentMethods: [{ type: String, enum: ['Paypal', 'Credit Card', 'COD'] }],
    savedRecipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
    // savedArticles: [{ type: Schema.Types.ObjectId, ref: 'Article' }],
    // flaggedArticles: [{ type: Schema.Types.ObjectId, ref: 'Article' }]
  }, {
    timestamps: true,
  },
);

const User = mongoose.model('User', UserSchema);
export default User;
