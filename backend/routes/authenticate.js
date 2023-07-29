const router = require("express").Router();
const authController = require("../controllers/AuthController");

router.post("/register", authController.createUser);
router.post("/signin", authController.signin);

module.exports = router;