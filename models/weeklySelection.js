import mongoose from 'mongoose';

const { Schema } = mongoose;
const weeklySelection = new Schema(
  {
    recipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
    plan: { type: Schema.Types.ObjectId, ref: 'Plan' },
    startDate: Date,
    endDate: Date
  }, {
    timestamps: true,
  },
);

const WeeklySelection = mongoose.model('WeeklySelection', weeklySelection);
export default WeeklySelection;
