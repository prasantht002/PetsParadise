import contactModel from "../model/contactModel.js";

const creatContact = async(req,res)=>{
    try{
     const{name,email,phone,message}= req.body;
     const newContact = new contactModel({name,email,phone,message});
     await newContact.save();
     res.status(200).json({success:'true',message:'Message sent succesfully',newContact})
    }
    catch(error){
     console.log(error);
     res.status(500).json({success:'true',message:'Internal Server error',})
    }
}

const getContact = async(req,res)=>{
try{
 const contact = await contactModel.find()
 if(!contact){
    res.status(404).json({success:false, message:"Not found", contact})
}
 res.status(200).json({success:'true',message:'contact displayed succesfully', contact})
}
catch(error){
console.log(error)
res.status(500).json({success:'true',message:'Internal Server error',})
}
}
export {creatContact, getContact} 