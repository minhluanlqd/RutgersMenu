const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Food must have a name"],
  },

  campus: {
    type: String,
    required: [true, "Food must have a campus"],
    enum: {
      values: ["busch", "livingston", "collegeAve", "cookdouglas"],
      message: "Campus is either: busch, livingston, collegeAve, cookdouglas",
    },
  },
  info:{
      type: String,
      required: [true, "Food must have information"]
  },
  img:{
      type:  String,
      required:[true, "Food must have picture"]
  }
});

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;

