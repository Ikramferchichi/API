const express=require("express");
const router=express.Router();
const user=require('../models/userModel');

router.post("/addUser",async (req,res)=>{
    try{
        //creation de user selon le model
        const userModel=new user({
           firstName:req.body.firstName,
           lastName:req.body.lastName,
           email:req.body.email,
           tel:req.body.tel
       }) 
       console.log("userModel",userModel);
       //connex avec mongoDb 
       const userToSave=await userModel.save();
       res.status(201).json(userToSave);
    
      }catch(err){
           res.status(500).json({msg:err})
      }
})

router.get("/getUsers",async (req,res)=>{
    try{
    const users=await user.find();
    res.status(201).json(users);
    }
    catch(err){
        res.status(500).json({msg:err})
    }
})
router.get("/getUserByID/:id/:mat",(req,res)=>{
    const id=req.params.id;
    const matricule=req.params.mat;
    console.log("id",id);
    console.log("mat",matricule);
    res.send({msg:"working fine"})
})

router.put("/updateUser/:idUser",async (req,res)=>{
    try{
    const idUser=req.params.idUser;
    const newDataUser=req.body;
    const options={new :true}
    const result= await user.findByIdAndUpdate(idUser,newDataUser,options);
    res.status(200).json(result);
    }
    catch(err){
        res.status(500).json({msg:err})  
    }
})

router.delete("/deleteUser/:id",async (req,res)=>{
    try{
    const id=req.params.id;
    const deleteUser=await user.findByIdAndDelete(id);
    res.status(200).send(`user ${deleteUser.firstName} is deleted`);
}
catch(err){
    res.status(500).json({msg:err})  
}
})


module.exports=router