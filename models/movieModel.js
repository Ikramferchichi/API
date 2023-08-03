const mongoose =require('mongoose');
const movieSchema=new mongoose.Schema({
   Name:{
    required:true,
    type:String
   },
   categ:{
    required:true,
    type:String
   },
   released_in:{
    required:true,
    type:Number
   },
   director:{
    required:false,
    type:String
   },
   rating:{
    required:false,
    type:String
   }
})
module.exports=mongoose.model('movie',movieSchema);