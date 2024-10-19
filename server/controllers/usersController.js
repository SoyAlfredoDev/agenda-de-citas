import User from '../models/usersModel.js';
import bcrypt from 'bcrypt'


// Controlador para obtener Usuarios
const getUsersController = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users); // Envía la respuesta con el estado 200
    } catch (error) {
        console.log('error al obtener los usuario / userController.js - getUsersController', error)
        throw error;
    }
}

// Controlador para crear un nuevo usuario
const createUserController = async (req, res) => {
    try {
        const saltRounds = 10;
        const { userFirstName, userLastName, userEmail, userPassword, userPasswordConfirmation } = req.body;
        if (userPasswordConfirmation == userPassword) {
            const newUser = await User({
                userFirstName,
                userLastName,
                userEmail,
                userPassword: await bcrypt.hash(userPassword, saltRounds),
                userProfile: ['customer']
            });
            await newUser.save();
            return res.status(201).json({
                message: 'Usuario creado exitosamente',
                user: {
                    userFirstName,
                    userLastName,
                    userEmail
                }
            });
        }
    } catch (error) {
        console.log('error al crear usuario / userController.js', error)
        throw error;
    }
};

export { getUsersController, createUserController };