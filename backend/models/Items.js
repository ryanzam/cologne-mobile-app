const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    name: {type: String, required: true},
    imgUrl: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: String, required: true},
}, {timestamps: true})

module.exports = mongoose.model("Item", ItemSchema);