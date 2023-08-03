const express=require("express");
const router=express.Router();
const movie=require('../models/movieModel');

router.post("/addmovie",async (req,res)=>{
    try{
        //creation de movie selon le model
        const movieModel=new movie({
           Name:req.body.Name,
           categ:req.body.categ,
           released_in:req.body.released_in,
           director:req.body.director_name,
           rating:req.body.rating
          
       }) 
       console.log("movieModel",movieModel);
       const movieToSave=await movieModel.save();
       res.status(201).json(movieToSave);
    
      }catch(err){
           res.status(500).json({msg:err})
      }
})

router.get("/getmovies",async (req,res)=>{
    try{
    const movies=await movie.find();
    res.status(201).json(movies);
    }
    catch(err){
        res.status(500).json({msg:err})
    }
})

router.put("/updatemovie/:idmovie",async (req,res)=>{
    try{
    const idmovie=req.params.idmovie;
    const newDatamovie=req.body;
    const options={new :true}
    const result= await movie.findByIdAndUpdate(idmovie,newDatamovie,options);
    res.status(200).json(result);
    }
    catch(err){
        res.status(500).json({msg:err})  
    }
})

router.delete("/deletemovie/:id",async (req,res)=>{
    try{
    const id=req.params.id;
    const deletemovie=await movie.findByIdAndDelete(id);
    res.status(200).send(`movie ${deletemovie.Name} is deleted`);
}
catch(err){
    res.status(500).json({msg:err})  
}
})


module.exports=router