const mongoose=require("mongoose");
let cartSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    pincode:{
        type:Number,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    house:{
        type:String,
        required:true,
    },
    area:{
        type:String,
        required:true,
    }
});
const Address= mongoose.model("Address",cartSchema);

module.exports=Address;