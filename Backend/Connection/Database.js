const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://udithdas09:udith@cluster0.vmuwoau.mongodb.net/R1?retryWrites=true&w=majority")
.then(()=>{console.log("Db connected")})
.catch(err=>console.log(err));