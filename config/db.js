import mongoose from "mongoose";

 const connectToMongodb = async ()=>{
    try {
      await  mongoose.connect(process.env.MONGO_URI)
      console.log("connnect to mongodb")
    } catch (error) {
        console.log(`Error in connecting to mongodb ${error.message}`)
    }
}

export default connectToMongodb;