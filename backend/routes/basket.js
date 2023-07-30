const router = require("express").Router();
const basketController = require("../controllers/BasketController");

router.post("/", basketController.addToBasket);
router.get("/:id", basketController.getBasket);
router.delete("/:basketItemId", basketController.deleteBasketItem);
router.post("/changebasket", basketController.changeBasketAmount)

module.exports = router;
