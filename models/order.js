import mongoose from 'mongoose';

const { Schema } = mongoose;
const OrderSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        plan: { type: Schema.Types.ObjectId, ref: 'Plan' },
        recipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
        servings: Number,
        deliveryDate: Date,
        status: { type: String, enum: ['paid', 'out for delivery', 'complete', 'incomplete'] }
    },
    {
        timestamps: true
    }
);

const Order = mongoose.model('Order', OrderSchema);
export default Order;
