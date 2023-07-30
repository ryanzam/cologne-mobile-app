const router = require("express").Router();

const orderController = require("../controllers/OrderController");

router.get("/:id", orderController.getOrders);

module.exports = router;