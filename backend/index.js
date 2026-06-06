import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
import bookRoute from "./route/book.route.js"
import cors from "cors"
import userRoute from "./route/user.route.js"
const app= express();
app.use(express.json())
app.use(cors());
dotenv.config();
const PORT =process.env.PORT ||4000

// connect to db
const URI =process.env.mongodbURI
const dbconnect= async ()=>{
try {
 await mongoose.connect(URI);
  console.log("connected to db");
  app.listen(PORT, () => {
    console.log(`listening at port ${PORT}`);
  });
} catch (error) {
  console.log("db connection error ",error);
}
}

dbconnect();
 app.use("/book",bookRoute)
 app.use("/user",userRoute)

