import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async (): Promise<void> => {
    const db_url = process.env.DB_CONNECTION_STRING;

    if (!db_url) {
        console.error('MongoDB connection string not found in .env');
        process.exit(1);
    }
    
    try {
        await mongoose.connect(db_url);
        console.log('✅ Connected to MongoDB');
    } catch (err) {
        console.error('❌ Error connecting to MongoDB:', err);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
