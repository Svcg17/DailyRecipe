import mongoose from 'mongoose';

const { Schema } = mongoose;
const TipSchema = new Schema(
    {
        description: String,
        images: [String],
        author: { type: Schema.Types.ObjectId, ref: 'User' },
        recipe: { type: Schema.Types.ObjectId, ref: 'Recipe' }
    },
    {
        timestamps: true
    }
);

const Tip = mongoose.model('Tip', TipSchema);
export default Tip;
