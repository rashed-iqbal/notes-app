const mongoose = require('mongoose');

const connectDB = (callback)=>{
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(callback)
    .catch(e=>{
        console.log(e);
        process.exit(1)
    })
}

module.exports = connectDB