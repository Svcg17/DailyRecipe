import mongoose from 'mongoose';

const { Schema } = mongoose;
const ImageSchema = new Schema(
    {
        path: String
    }
);

const Image = mongoose.model('Image', ImageSchema);
export default Image;
