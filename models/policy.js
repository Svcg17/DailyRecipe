import mongoose from 'mongoose';

const { Schema } = mongoose;
const PolicySchema = new Schema(
    {
        privacyPolicy: String,
        termsOfService: String
    }
);

const Policy = mongoose.model('Policy', PolicySchema);
export default Policy;
