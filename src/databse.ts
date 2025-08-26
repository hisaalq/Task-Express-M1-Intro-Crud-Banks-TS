import mongoose from "mongoose";
import { env } from './config/env';


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(env.DB_URL);
        console.log(`Connected to MongoDB: ${conn.connection.host}`);
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
}

export default connectDB;