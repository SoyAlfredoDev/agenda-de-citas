import User from '../models/usersModel.js';
import bcrypt from 'bcrypt';
import createAccessToken from '../libs/jws.js';


export const login = async (req, res) => {
    try {
        const { userEmail, userPassword } = req.body
        const userFound = await User.findOne({ userEmail });
        if (!userFound) return res.status(404).send('User not found');
        const isMatch = await bcrypt.compare(userPassword, userFound.userPassword)
        if (!isMatch) return res.status(401).send('Incorrect password')
        const token = await createAccessToken({ id: userFound._id })
        res.cookie('token', token)
        res.json({
            userId: userFound._id,
            userFirstName: userFound.userFirstName,
            userEmail: userFound.userEmail
        })
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal server error')
    }
};

export const logout = (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0)
    });
    return res.sendStatus(200);

};