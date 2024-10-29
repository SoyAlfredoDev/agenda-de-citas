import User from '../models/usersModel.js';
import bcrypt from 'bcrypt'
import createAccessToken from '../libs/jws.js';


// Controlador para crear un nuevo usuario
const createUser = async (req, res) => {
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
            const token = await createAccessToken({ id: newUser._id });
            res.cookie('token', token);

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

// Controlador para obtener Usuarios
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        console.error('Error al obtener los usuarios / userController.js - getUsersController:', error);
        return res.status(500).json({ message: 'Error al obtener los usuarios', error });
    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(400).json({ message: "User not found" });
        return res.status(200).json({
            userId: user._id,
            userEmail: user.userEmail,
            userFirstName: user.userFirstName,
            userLastName: user.userLastName
        });
    } catch (error) {
        return res.status(404).json({ message: "Error fetching user" });
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(400).json({ message: "User not found" });
        return res.status(200).json({
            userId: user._id,
            userEmail: user.userEmail,
            userFirstName: user.userFirstName,
            userLastName: user.userLastName
        });
    } catch (error) {
        return res.status(404).json(error);
    }

}

export { getUsers, createUser, getUser, updateUser };