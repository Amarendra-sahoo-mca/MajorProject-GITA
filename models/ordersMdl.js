const mongoose=require("mongoose");
let ordersSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    info:{
        type:String,
        required:true
    },
    image1:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    address:{
        type:text,
        required:true,
    }
});
const Order= mongoose.model("Order",ordersSchema);

module.exports=Order;