const app = require('./app');
const mongoose = require('mongoose');

const DBPassWord = '2gQcm8UfzG7tFpfy';

const DBUrl = 'mongodb+srv://TL:2gQcm8UfzG7tFpfy@cluster0-h0wqd.gcp.mongodb.net/MenuRutgers?retryWrites=true&w=majority';

mongoose
  .connect(DBUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
  })
  .then(() => console.log('DB connection successful!'));


const PORT=5000||process.env.PORT;
app.listen(PORT, () =>{
    console.log(`server running on port: ${PORT} `)
});
