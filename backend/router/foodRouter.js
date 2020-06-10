const express = require('express');
const foodController = require("../controller/foodController");
const router = express.Router();


router.route('/').get(foodController.getAllFood);


router.route('/:campus').get(foodController.getAllFood);

module.exports = router;