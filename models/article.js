import mongoose from 'mongoose';

const { Schema } = mongoose;
const ArticleSchema = new Schema(
    {
        title: String,
        description: String,
        minutesToRead: Number,
        category: String,
        subcategory: String,
        hashtags: String,
        images: [String],
        flagged: Number,
        author: { type: Schema.Types.ObjectId, ref: 'Admin' }
    },
    {
        timestamps: true
    }
);

const Article = mongoose.model('Article', ArticleSchema);
export default Article;
