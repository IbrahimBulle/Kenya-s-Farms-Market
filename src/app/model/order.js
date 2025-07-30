import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  product_id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Orders = mongoose.models.Orders || mongoose.model('Orders', OrderSchema);
export default Orders;
