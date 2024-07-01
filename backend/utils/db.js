import mongoose from "mongoose";
const  dbCon = async ()=>{
    //connect to MongoDB
try{
    await mongoose.connect("mongodb+srv://prasanthtamilarasu2003:zPyRLpeK3rxaCQGm@mycluster1.vh0vtts.mongodb.net/?retryWrites=true&w=majority&appName=myCluster1/");
    console.log("Connected to mongoDB !!");

}catch(error){
    console.log("Error : ", error);
}
}
export default dbCon;