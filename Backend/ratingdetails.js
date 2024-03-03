const mongoose=require("mongoose")

let sc=mongoose.Schema;
const ratingschema = new sc(
{
rating:'String'
}
);
var ratingmodel =mongoose.model("rating",ratingschema)
module.exports=ratingmodel;