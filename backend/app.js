const express = require("express");

const app = express();
//const foodRouter = ... ;
app.use(express.json());


//app.use('/food', foodRouter);

app.get('/', (req, res) =>{
    res.end('Hello World');
    console.log(req.body.name)
})

module.exports=app;

