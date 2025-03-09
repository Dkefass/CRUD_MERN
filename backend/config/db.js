import mongoose from "mongoose";

export  const connectDB =async ()=> {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log(`connecté avec succès ${con.connection.host}`);
    } catch (error) {
       console.error(`Error ${error.message}`);
    }
}