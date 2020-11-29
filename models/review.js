import mongoose from 'mongoose'

const { Schema } = mongoose;
const ReviewSchema = new Schema(
    {
        rating: Number,
        description: String,
        images: [String],
        author: { type: Schema.Types.ObjectId, ref: 'User' },
        recipe: { type: Schema.Types.ObjectId, ref: 'Recipe' }
    },
    {
        timestamps: true
    }
);

const Review = mongoose.model('Review', ReviewSchema);
export default Review;
