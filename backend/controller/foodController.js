const Food = require("../model/foodModel");

 exports.getAllFood = async (req, res) => {

    try{
        const food = await Food.find();
        console.log(food);
        res.json({
            data: food,
            message: "Success"
        })
    }catch(e){
        console.log(e);
    }
   
}
