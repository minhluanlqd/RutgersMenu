const express = require('express');

//const foodController = ...;

const router = express.Router();


router.route('/').get(foodController.getAllFood);


router.route('/:campus').get(foodController.getAllFood);