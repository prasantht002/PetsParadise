import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    name: String,
    description: String,
    adoptionFee: Number,
    status: String,
    image: String
},{timestamps:true})

const petModel = mongoose.model('pet',petSchema);
export default petModel;