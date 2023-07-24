const Item = require("../models/Items");

module.exports = {
    addItem: async(req, res) => {
        const newItem = new Item(req.body);
        try {
            await newItem.save();
            res.status(201).json("Item added.");
        } catch (error) {
            res.status(500).json("error occured while adding item.");
        }
    },
    getItems: async(req, res) => {
        try {
            const items = await Item.find().sort({ createdAt: -1 });
            res.status(200).json(items);
        } catch (error) {
            res.status(500).json("error occured while fetching items.");
        }
    },
    getItem: async(req, res) => {
        try {
            const item = await Item.findById(req.params.id);
            res.status(200).json(item);
        } catch (error) {
            res.status(500).json("error occured while fetching item.");
        }
    },
    searchItem: async(req, res) => {
        try {
            const results = await Item.aggregate(
                [
                    {
                      $search: {
                        index: "cologne",
                        text: {
                          query: req.params.key,
                          path: {
                            wildcard: "*"
                          }
                        }
                      }
                    }
                  ]
            );
            res.status(200).json(results);
        } catch (error) {
            res.status(500).json("error occured while searching for item");
        }
    }
}