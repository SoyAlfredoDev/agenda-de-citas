import User from '../models/usersModel.js';

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)
    if (!userFound) return res.status(400).json({ message: "user not found" });

    return res.json({
        userId: userFound._id,
        userEmail: userFound.userEmail,
        userFristName: userFound.userFirstName,
        userLastName: userFound.userLastName,
        userCreatedAt: userFound.createdAt,
        userUpdatedAt: userFound.updatedAt
    })
}

