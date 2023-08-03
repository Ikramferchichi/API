const express=require("express");
const app=express();
app.use(express.json());

const routes_user=require("./routes/userapi");
app.use("/user",routes_user);
const routes_product=require("./routes/productapi");
app.use("/product",routes_product);
const routes_movie=require("./routes/movieapi");
app.use("/movie",routes_movie);

require('dotenv').config();

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