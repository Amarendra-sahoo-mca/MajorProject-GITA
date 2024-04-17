const mongoose=require("mongoose");
let cartSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }
});
const Cart= mongoose.model("Cart",cartSchema);

module.exports=Cart;