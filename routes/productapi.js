const express=require("express");
const router=express.Router();
const product=require('../models/productModel');

router.post("/addproduct",async (req,res)=>{
    try{
        //creation de product selon le model
        const productModel=new product({
           matricule:req.body.matricule,
           categ:req.body.categ,
           price:req.body.price,
           desc:req.body.desc
       }) 
       console.log("productModel",productModel);
       const productToSave=await productModel.save();
       res.status(201).json(productToSave);
    
      }catch(err){
           res.status(500).json({msg:err})
      }
})

router.get("/getproducts",async (req,res)=>{
    try{
    const products=await product.find();
    res.status(201).json(products);
    }
    catch(err){
        res.status(500).json({msg:err})
    }
})

router.put("/updateproduct/:idproduct",async (req,res)=>{
    try{
    const idproduct=req.params.idproduct;
    const newDataproduct=req.body;
    const options={new :true}
    const result= await product.findByIdAndUpdate(idproduct,newDataproduct,options);
    res.status(200).json(result);
    }
    catch(err){
        res.status(500).json({msg:err})  
    }
})

router.delete("/deleteproduct/:id",async (req,res)=>{
    try{
    const id=req.params.id;
    const deleteproduct=await product.findByIdAndDelete(id);
    res.status(200).send(`product ${deleteproduct.matricule} is deleted`);
}
catch(err){
    res.status(500).json({msg:err})  
}
})


module.exports=router