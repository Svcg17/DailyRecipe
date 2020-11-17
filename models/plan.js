import mongoose from 'mongoose';

const { Schema } = mongoose;
const PlanSchema = new Schema(
  {
    name: String,
    diet: { type: Schema.Types.ObjectId, ref: 'Diet', required: false },
    recipesPerWeek: Number,
    servings: Number,
    pricePerServing: Number,
    description: String,
    menu: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
    isCooked: { type: Boolean, default: true }
  },
);

const Plan = mongoose.model('Plan', PlanSchema);
export default Plan;
