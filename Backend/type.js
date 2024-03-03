const mongoose=require("mongoose")

let sc=mongoose.Schema;
const typeschema = new sc(
{
type:'String'
}
);
var typemodel =mongoose.model("type",typeschema)
module.exports=typemodel;