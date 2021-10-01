//Importing Stuff
import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import shop from "./models/Shops.js";


//App Stuff
const app=express();
const port=process.env.PORT||3000;


//middlewares
app.use(express.json());
app.use(cors());



//Database Stuff
// ApxSl6G3WMIwuSf1
// mongodb+srv://Admin:<password>@cluster0.yayms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://Admin:ApxSl6G3WMIwuSf1@cluster0.yayms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const db=mongoose.connection;
db.once("open",()=>{console.log("DB is Connected Successfully !!")});



//Routes
app.get("/",(req,res)=>{

   


    

});





//Listeners
app.listen(port,()=>{console.log("Server Started on Port :"+port)});