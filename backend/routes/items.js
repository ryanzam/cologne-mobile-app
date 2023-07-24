const router = require("express").Router();
const itemController = require("../controllers/ItemsController");

router.get("/", itemController.getItems)
router.get("/:id", itemController.getItem)
router.post("/", itemController.addItem)
router.get("/search/:key", itemController.searchItem)

module.exports = router;