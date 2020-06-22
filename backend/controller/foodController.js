const Food = require("../model/foodModel");

exports.getAllFood = async (req, res) => {
  try {
    const food = await Food.find();
    //console.log(food);
    res.json({
      data: food,
      message: "Success",
      quantity: food.length,
    });
    // res.header["X-Total-Count"] = food.length;
    /*res.set({
      "X-Total-Count": food.length,
    });*/
  } catch (e) {
    res.json({
      error: e,
    });
    console.log(e);
  }
};

exports.getFoodByCampus = async (req, res) => {
  let { campus } = req.params;
  try {
    let food = await Food.find({ campus: campus });
    res.json({
      message: "success",
      data: food,
      quantity: food.length,
    });
  } catch (e) {
    console.log(e);
    res.json({
      error: e,
    });
  }
};

exports.addFood = async (req, res) => {
  let data = req.body;

  try {
    let foodCreated = await Food.create(data);
    res.json({
      message: "success",
      newFood: foodCreated,
    });
  } catch (e) {
    console.log(e);
    res.json({
      error: e,
    });
  }
};
exports.updateFoodById = async (req, res) => {
  const id = req.params.id;
  try {
    const updateFood = await Food.findOneAndUpdate({ _id:id }, req.body, {
      runValidators: true,
      new: true
    });

    res.status(200).json({
      message: 'success',
      updateFood: updateFood
    })
  } catch (e) {
    console.log(e);
    res.status(400).json({
      error: e
    })
  }
};

exports.deleteFoodById = async (req, res) => {
  let id = req.params.id;
  try {
    let dataDelete = await Food.findByIdAndDelete({ _id: id });
    res.json({
      message: "success",
      foodDelete: dataDelete,
    });
  } catch (e) {
    console.log(e);
    res.json({
      error: e,
    });
  }
};

exports.deleteAll = async (req, res) => {
  try {
    await Food.deleteMany();
    res.json({
      message: "success",
    });
  } catch (e) {
    res.json({
      error: e,
    });
  }
};
