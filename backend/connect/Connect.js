const mongoose = require("mongoose");

const connect = async ()=>{
    try {
        await mongoose
        .connect("mongodb+srv://kumarrajakonna8:Konnakumar@cluster0.lxkps.mongodb.net/")
        .then(()=>{
            console.log("connected")
        })
    } catch (error) {
        console.log(error)
    }
}

connect()