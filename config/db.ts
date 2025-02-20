import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URL || '' );
        console.log('MongoDB connected');

    }catch(error){
        console.log(`Error: ${error}`);
        process.exit(1);

    }
}
export default connectDB;