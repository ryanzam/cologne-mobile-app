const router = require("express").Router();
const userController = require("../controllers/UserController");

router.get("/:id", userController.getUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;