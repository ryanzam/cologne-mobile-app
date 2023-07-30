const Item = require("../models/Items");
const Basket = require("../models/Basket");

module.exports = {
    addToBasket: async (req, res) => {
        try{
            const { userId, basketItem, amount } = req.body;
            
            const basket = await Basket.findOne({userId});
            
            if(!basket) {
                const newBasket = new Basket({ userId, items: [{ basketItem, amount }] });
                
                await newBasket.save();
                res.status(200).json({ message: "Item added to basket."});
                
            } else {
                const alreadyAddedItem = basket.items.find((i) => i.basketItem.toString() === basketItem);
                
                if(alreadyAddedItem) alreadyAddedItem.amount += 1;
                
                if(!alreadyAddedItem) basket.items.push({ basketItem, amount });

                await basket.save();
                res.status(200).json({ message: "Item added to basket."});
            }

        } catch (error) {
            res.status(500).json(error);
        }
    },

    getBasket: async(req, res) => {
        try {
            const userId = req.params.id;
            const basket = await Basket.find({ userId })
                            .populate("items.basketItem", "_id name imgUrl price");
            res.status(200).json(basket);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    deleteBasketItem: async(req, res) => {
        try {
            const basketItemId = req.params.basketItemId;
            
            const updatedBasket = await Basket.findOneAndUpdate(
                                    { "items._id": basketItemId },
                                    { $pull: { items: { _id: basketItemId }}},
                                    { new: true });

            if(!updatedBasket) return res.status(404).json({ message: "Item not found."});
            res.status(200).json(updatedBasket);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    changeBasketAmount: async(req, res) => {
        try {
            const { userId, basketItem } = req.body;   
            
            const basket = await Basket.findOne({ userId });

            if(!basket) return res.status(404).json({ message: "Basket not found."});

            const alreadyAddedItem = basket.items.find((i) => i.basketItem.toString() === basketItem);
            if(!alreadyAddedItem) return res.status(404).json({message: "Item not found."});
            
            if(alreadyAddedItem.amount === 1) {
                basket.items = basket.items.filter(i => i.basketItem.toString() !== basketItem);
            } else {
                alreadyAddedItem.amount -= 1;
            }
            await basket.save();

            if(alreadyAddedItem.amount === 0) {
                await Basket.updateOne({ userId}, {$pull : {items : {basketItem}}});
            }
            res.status(200).json({ message: "Item updated." });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}