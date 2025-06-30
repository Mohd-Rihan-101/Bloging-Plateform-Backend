const express = require('express');
const app = express();
require('./db');

app.get('/', (req,res)=>{
    res.send("Welcome to our Platform")
})

const blogRutes = require("./routes/blogRoutes");
app.use('/blog', blogRutes);

app.listen(6000, ()=>{
    console.log("Server on listening on PORT 6000");
})