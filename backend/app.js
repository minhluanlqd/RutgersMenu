const express = require("express");

const app = express();
//const foodRouter = ... ;
app.use(express.json());






app.use('/food', foodRouter);
module.exports=app;

