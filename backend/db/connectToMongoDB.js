import mongoose from 'mongoose';

const connectToMongoDB = async () => {
    try {
        const uri = 'mongodb://localhost:27017/My-chat-app'; // Replace with your MongoDB connection string
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

export default connectToMongoDB;