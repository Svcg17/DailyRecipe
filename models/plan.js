import mongoose from 'mongoose';

const { Schema } = mongoose;
const PlanSchema = new Schema(
  {
    name: String,
    diet: { type: Schema.Types.ObjectId, ref: 'Diet', required: false },
    recipesPerWeek: [Number],
    servings: { type: Number, enum: [2, 4] },
    pricePerServing: Number,
    description: String,
    menu: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
  },
);

const Plan = mongoose.model('Plan', PlanSchema);
export default Plan;
