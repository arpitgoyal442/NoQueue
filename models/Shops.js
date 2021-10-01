//Here We Are definintg the Scgema/Structure of our data

import mongoose from "mongoose";

const shopsSchema= mongoose.Schema({
    
    Name:String,
    Items:Array,
    Price:Array,
    Images:Array,
    Phone:Number

});



export default mongoose.model("shops",shopsSchema);