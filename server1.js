const express=require("express");
const app=express();
const multer=require("multer");
const path=require("path"); 

const routes_user=require("./routes/userapi");
app.use("/user",routes_user);
const routes_product=require("./routes/productapi");
app.use("/product",routes_product);
const routes_movie=require("./routes/movieapi");
app.use("/movie",routes_movie);
const routes_post=require("./routes/postapi");
app.use("/post",routes_post);

require('dotenv').config();
app.use(express.json());
app.use("/images",express.static(path.join(__dirname, "/images")));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, "filename"); // attention ici hedha avec react mais 9bal react "nom.png"
    },
  });
  
const upload = multer({ storage: storage });
 
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("file has been uploaded")
})
 

//connect to Mongo db 
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
 
mongoose.connect(mongoString);
const database = mongoose.connection;
 
database.on('error', (error) => {
    console.log(error)
})
 
database.once('connected', () => {
    console.log('Database Connected');
})
 

app.listen(6000,()=>{
    console.log("server running well");
})