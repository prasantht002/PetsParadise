import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signup = async (req,res)=>{
    try {
        const{fullname,email,password,role} = req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message: "User already exists"})
        }
        const hashPassword = await bcryptjs.hash(password, 10);
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
            role: role || 'user'
        })
        await createdUser.save()
        res.status(201).json({message: "User created successfully"})

    } catch (error) {
        console.log("Error: ", error.message)
        res.status(500).json({message: "Internal Server Error"})
    }
};

export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid Email" });
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Password" });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: "Login successfully",
            token,
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.log("Error: ", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};