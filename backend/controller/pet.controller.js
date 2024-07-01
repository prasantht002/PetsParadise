import petModel from '../model/pet.model.js';

const getPets = async(req,res)=>{
try {
const pet = await petModel.find();
if(!pet){
    res.status(404).json({success:false, message:"Not found",pet})
}
res.status(200).json({succes:true,message:"displayed successfully",pet})
} catch (error) {
    console.log(error)
    res.status(500).json({success:false, message:'Internal Server Error',pet})
}
}



const getPet = async (req,res)=>{
    try{
    const petId =req.params.id
    const getPet = await petModel.findById(petId)
    if(!getPet){
        res.status(404).json({success:false, message:"Not found",getPet})
    }
    res.status(200).json({succes:true,message:"displayed successfully",getPet})
    }
catch(error){
    console.log(error)
    res.status(500).json({success:false, message:'Internal Server Error'})
}
}



const createPet = async(req,res)=>{
    try{
    const {name,description,adoptionFee,status,image} = req.body
    const newPet = new petModel({name,description,adoptionFee,status,image})
    await newPet.save();
    res.status(200).json({success:true, message:'new pet added successfully',newPet})
    }
    catch(error){
        console.log(error)
        res.status(500).json({success:false, message:'Internal Server Error',newPet})
    }
}


const updatePet = async(req,res)=>{
 try{
   const petId = req.params.id;
   const updatedPet =await petModel.findByIdAndUpdate(petId,req.body,{new:true})
   if(!updatedPet){
    res.status(404).json({success:false, message:"Not found",updatedPet})
}
   res.status(200).json({success:true,message:'pet updated successfully',updatedPet})
 }
 catch(error){
    console.log(error)
    res.status(500).json({success:false, message:'Internal Server Error'})
 }
}

const deletePet = async(req,res)=>{
    try{
    const petId = req.params.id;
    const deletedPet = await petModel.findByIdAndDelete(petId);
    if(!deletedPet){
        res.status(404).json({success:false, message:"Not found",deletedPet})
    }
       res.status(200).json({success:true,message:'pet deleted successfully', deletedPet})
    }
    catch(error){
        console.log(error)
        res.status(500).json({success:false, message:'Internal Server Error'})
    }
}

export {getPets, createPet, updatePet, deletePet, getPet}