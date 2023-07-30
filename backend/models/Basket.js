const mongoose = require("mongoose");

const Basket = new mongoose.Schema({
    userId: { type: String, required: true },
    items: [
        {
            basketItem: { type: mongoose.Schema.Types.ObjectId, ref: "Item"},
            amount: { type: Number, default: 1}
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model("Basket", Basket);