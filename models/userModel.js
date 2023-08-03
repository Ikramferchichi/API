const mongoose =require('mongoose');
const userSchema=new mongoose.Schema({
   firstName:{
    required:true,
    type:String
   },
   lastName:{
    required:true,
    type:String
   },
   email:{
    required:true,
    type:String
   },
   tel:{
    required:false,
    type:Number
   }
})
module.exports=mongoose.model('user',userSchema);