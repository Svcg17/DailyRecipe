import mongoose from 'mongoose';

const { Schema } = mongoose;
const CommentSchema = new Schema(
    {
        description: String,
        images: [String],
        author: { type: Schema.Types.ObjectId, ref: 'User' },
        article: { type: Schema.Types.ObjectId, ref: 'Article' }
    },
    {
        timestamps: true
    }
);

const Comment = mongoose.model('Comment', CommentSchema);
export default Comment;
