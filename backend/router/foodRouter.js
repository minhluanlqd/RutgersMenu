const express = require("express");
const foodController = require("../controller/foodController");
const router = express.Router();

router.route("/")
.get(foodController.getAllFood)
.post(foodController.addFood)
.delete(foodController.deleteAll);

router.route("/:campus").get(foodController.getFoodByCampus);

router.route('/:id').delete(foodController.deleteFoodById)

module.exports = router;
