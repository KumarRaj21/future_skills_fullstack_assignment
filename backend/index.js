const express = require("express");
const app = express();

require('./connect/Connect');
const card = require('./routes/card');

const cors = require("cors");


app.use(express.json());
app.use(cors());


app.use('/api',card);
app.get("/",(req,res)=>{
    res.send("<h1>Hey, it is backend of help center</h1>")
})


app.listen(1000, ()=>{
    console.log("listening"); 
})