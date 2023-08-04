const express=require("express");
const router=express.Router();
const post=require('../models/postModel');
const user=require('../models/userModel');


router.post("/addpost/:IdOwner",async (req,res)=>{
    try{
       const IdOwner=req.params.IdOwner;
       const User=await user.findOne({_id:IdOwner})
        if(User.firstName !=null){
        const postModel=new post({ 
            IdPost:req.body.IdPost,
            content:req.body.content,
            IdOwner:IdOwner,
            image:req.body.image   
        })
       const postToSave=await postModel.save();
       res.status(201).json(postToSave);
        }else{
            res.status(400).json({msg:"user not existed"}) 
        }
   }
    catch(err){
           res.status(500).json({msg:err})
        }
})

router.get("/getposts",async (req,res)=>{
    try{
    const posts=await post.find();
    res.status(201).json(posts);
    }
    catch(err){
        res.status(500).json({msg:err})
    }
})
router.get("/getpostrByID/:id", async (req,res)=>{
   try{
    const idUser=req.params.id;
    const users=await user.findOne({_id:idUser});
    if(users.firstName !=null){
        const posts= await post.find({IdOwner:idUser});
        res.status(200).json(posts);
    }else{
        res.status(500).json({msg:"user not existed"}) 
    }
 }catch(err){
        res.status(500).json({msg:err})
     }
})





 module.exports=router