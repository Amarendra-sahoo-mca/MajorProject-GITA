const mongoose=require("mongoose");
const {Schema} = mongoose;
let userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:Number,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    address:[{
           type: Schema.Types.ObjectId,
           ref:"Address",
          
        },],
    orders:[
        {
            type: Schema.Types.ObjectId, 
            ref:"Order",
        },
    ],
    cart:[
        {
            type: Schema.Types.ObjectId, 
            ref:"Cart",
        },
    ],
});
const User= mongoose.model("User",userSchema);

module.exports=User;