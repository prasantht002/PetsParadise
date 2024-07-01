import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // Restrict roles to 'user' and 'admin'
        default: 'user'          // Default role is 'user'
    }
})
const User = mongoose.model("User", userSchema);
export default User;