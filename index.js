const express = require("express");
const app = express();

app.get("/" , async(req , res)=>{
    res.send("Hello from app")
})

app.listen(3000 , ()=>{
    console.log("App is listening at 3000");
})