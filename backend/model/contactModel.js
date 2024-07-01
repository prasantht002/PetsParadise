import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    message:String,
},{timestamps:true})

const contactModel = mongoose.model('contact',contactSchema);
export default contactModel;