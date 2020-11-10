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
    instructions: [Object],
    duration: String,
    diet: { type: String, enum: ['meat and vegetables', 'vegetables'] },
    servings: { type: Number, enum: [2, 4] },
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
