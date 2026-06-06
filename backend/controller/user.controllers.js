
import User from "../model/user.model.js";
import bcrypt from "bcrypt"
export const  signup= async (req,res)=>{

    try {
        const {name,email,password,dob} =req.body;
        const user=await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exist"})
        }
       const hashpassword= await bcrypt.hash(password,10)
       const newUser= await User.create({
            name,dob,email,password:hashpassword,
        });
         res.status(201).json({
           message: "User created successfully",
           user: {
             _id: newUser._id,
             name: newUser.name,
             email: newUser.email,
             dob: newUser.dob,
           },
         });
    } catch (error) {
          console.log("error occured ",error)
            res.status(500).json({ message: "Something went wrong", error: error.message });
    }
}


export const login= async (req,res)=>{
    try {
         const {email,password}=req.body
         const user = await User.findOne({ email });
        if(!user) 
            return res.status(400).json({message:"User not exist"});

        const check = await bcrypt.compare(password,user.password)
         if (!check)
           return res.status(400).json({ message: "Invalid password" });

         res.status(200).json({ message: "Login successful", user });  
 

    } catch (error) {
        console.log("error occured ",error)
            res.status(500).json({ message: "Something went wrong", error: error.message });
    }
}