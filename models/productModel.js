const mongoose =require('mongoose');
const productSchema=new mongoose.Schema({
   matricule:{
    required:true,
    type:String
   },
   categ:{
    required:true,
    type:String
   },
   price:{
    required:true,
    type:String
   },
   desc:{
    required:false,
    type:Number
   }
})
module.exports=mongoose.model('product',productSchema);