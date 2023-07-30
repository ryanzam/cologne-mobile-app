const Order = require("../models/Order");

const orderController = {
    getOrders: async(req, res) => {
        try {
            const userId = req.params.id;
            const orders = await Order.find({userId})
                            .populate("itemId", "_id name imgUrl price");
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = orderController;