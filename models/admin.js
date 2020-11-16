import mongoose from 'mongoose';
import validator from 'validator';

const { Schema } = mongoose;
const AdminSchema = new Schema (
    {
        name: String,
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
        }
    }, {
        timestamps: true,
    },
);

const User = mongoose.model('Admin', AdminSchema);
export default User;
