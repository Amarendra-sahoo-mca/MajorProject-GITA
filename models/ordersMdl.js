const mongoose=require("mongoose");
const {Schema} = mongoose;
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
        type:Schema.Types.ObjectId,
        ref:"Address",
        required:true,
    },
    paymentId:{
        type:String,

    },
    gift:[
        {
        type:Schema.Types.ObjectId,
        ref:"Fitstgift",
        },
        {
         type:Schema.Types.ObjectId,
         ref:"Secondgift",
        },
        {
         type:Schema.Types.ObjectId,
         ref:"Thirdgift",
        },
    ],
});
const Order= mongoose.model("Order",ordersSchema);

module.exports=Order;