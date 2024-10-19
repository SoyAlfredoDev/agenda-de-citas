import mongoose from 'mongoose';

const { Schema } = mongoose;

// Definir el esquema para el modelo User
const userSchema = new Schema({
    userFirstName: { type: String, required: true },
    userLastName: { type: String, required: true },
    userEmail: { type: String, required: true, unique: true },
    userPassword: { type: String, required: true },
    userProfile: { type: Array, require: true }

}, {
    timestamps: true
});

// Crear el modelo User
const User = mongoose.model('User', userSchema);

export default User;