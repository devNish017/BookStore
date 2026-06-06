
import mongoose from "mongoose";
 const userSchema= mongoose.Schema({
    name:{
        type:String,
        required :true
    },
    email:{
        type:String,
        required :true,
        lowercase:true,
        uniqie:true
    },
    password:{
        type:String,
        required :true
    },
    dob:{
        type:String,
        required:true
    }
    
 })

 const user =mongoose.model("User",userSchema)
 export default user;