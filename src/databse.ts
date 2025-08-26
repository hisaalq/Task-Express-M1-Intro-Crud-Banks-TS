import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://sayuricerojp:biONHXkXy8yrIYeJ@cluster0.z6qhfos.mongodb.net/");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
}

export default connectDB;