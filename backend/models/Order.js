const mongoose = require("mongoose")

const Order = new mongoose.Schema({
    userId: { type: String, required: true },
    itemId: {
        type: mongoose.Schema.Types.ObjectId, ref: "Item"
    },
    amount: { type: Number, required: true},
    total: { type: Number, required: true},
    subtotal: { type: Number, required: true},
    statusPayment: { type: String, required: true},
    statusDelivery: { type: Number, default: "pending"}
}, {timestamps: true});

module.exports = mongoose.model("Order", Order);