import mongoose from 'mongoose';

const { Schema } = mongoose;
const RecipeSchema = new Schema(
  {
    title: String,
    ingredients: [{
      name: String,
      image: { type: String, required: false },
      inBox: { type: Boolean, default: true },
    }],
    instructions: Schema.Types.Mixed,
    duration: String,
    diet: { type: Schema.Types.ObjectId, ref: 'Diet', required: false },
    servings: Number,
    calPerServing: Number,
    isFeatured: { type: Boolean, default: false },
    // mainIngredients: [String],
    // categories: [String],
    season: { type: String, enum: ['Spring', 'Summer', 'Autumn', 'Winter'] },
    cuisine: String,
    nutrition: Object,
    allergens: String
  }, {
    timestamps: true,
  },
);

const Recipe = mongoose.model('Recipe', RecipeSchema);
export default Recipe;
