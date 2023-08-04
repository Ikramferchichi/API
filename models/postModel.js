const mongoose =require('mongoose');
const postSchema=new mongoose.Schema({
   IdPost:{
    required:true,
    type:Number
   },
   content:{
    required:true,
    type:String
   },
   IdOwner:{
    required:true,
    type:String
   },
   image:{
    required:false,
    type:String
   },
})
module.exports=mongoose.model('post',postSchema);