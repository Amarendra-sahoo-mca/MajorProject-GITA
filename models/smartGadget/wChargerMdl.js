const mongoose=require("mongoose");
const fridgeschema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image1:{
        type:String,
        required:true
    },
    image2:{
        type:String,
        required:true
    },
    image3:{
        type:String,
        required:true
    },
    info:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type: Number,
        required:true
    }
});
const WCharger=mongoose.model("WCharger",fridgeschema);

module.exports=WCharger;