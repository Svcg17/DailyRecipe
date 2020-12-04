import mongoose from 'mongoose';

const { Schema } = mongoose;
const ArticleSchema = new Schema(
    {
        title: String,
        description: String,
        minuteRead: Number,
        category: String,
        subcategory: String,
        hashtags: String,
        flagged: { type: Number, default: 0 },
        author: { type: Schema.Types.ObjectId, ref: 'Admin' }
    },
    {
        timestamps: true
    }
);

const Article = mongoose.model('Article', ArticleSchema);
export default Article;
