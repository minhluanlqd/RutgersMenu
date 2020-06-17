const express = require("express");
const foodController = require("../controller/foodController");
const authController = require('../controller/authController');
const router = express.Router();

router.route("/")
.get(foodController.getAllFood)
.post(authController.isLoggedIn, foodController.addFood)
.delete(authController.isLoggedIn ,foodController.deleteAll);

router.route("/:campus").get(foodController.getFoodByCampus);

router.route('/:id').delete(authController.isLoggedIn, foodController.deleteFoodById)

module.exports = router;
