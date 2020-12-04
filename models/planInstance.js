import mongoose from 'mongoose';

const { Schema } = mongoose;
const PlanInstanceSchema = new Schema(
  {
    plan: { type: Schema.Types.ObjectId, ref: 'Plan' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    // recipesPerWeek: Number,
    // totalPrice: Number,
    // selectedRecipes: [{
    //   type: Schema.Types.ObjectId,
    //   ref: 'Recipe',
    // }],
    // deliverySchedule: Date
  }, {
    timestamps: true,
  },
);

const PlanInstance = mongoose.model('PlanInstance', PlanInstanceSchema);
export default PlanInstance;
