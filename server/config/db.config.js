import mongoose from "mongoose";

// connect to MONGODB
export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongo connected: ${connection.connection.host}`);
    } catch (error) {
        console.error(`error: ${error.message}`);
        process.exit(1);  
    }
}