const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/blogDb")
.then(()=>{
    console.log("Database Connect Successfully");
}).catch((err)=>{
    console.log(err);
})