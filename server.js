const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Welcome to our Platform")
})

app.listen(6000, ()=>{
    console.log("Server on listening on PORT 6000");
})