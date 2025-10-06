import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true,     ref: "User" },
    items: [
        {
            product: { type: String, required: true, ref: "Book" },
            quantity: { type: Number, required: true },
        },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true, ref: "Address" },
    status: { type: String, default: "Order Placed" },
    paymentType: { type: String, required: true },
    isPaid: { type: Boolean, default: false, required: true },
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);
export default Order;
