import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const db = process.env.MONGO_URI;
        await mongoose.connect(db);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
    }