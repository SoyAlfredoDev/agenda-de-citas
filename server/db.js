// database connection
import mongoose from "mongoose";
import dotenv from 'dotenv';

const connectDB = async () => {
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('>>>>> Conectado a MongoDB');
        })
        .catch((error) => {
            console.error('>>>>> Error conectando a MongoDB:', error);
        });
}

export default connectDB;




