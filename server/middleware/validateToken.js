import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const TOKEN_SECRET = process.env.TOKEN_SECRET;

export const authRequired = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) return res.status(401).json({ message: "no token, authorizacion denied" });

    jwt.verify(token, TOKEN_SECRET, (error, user) => {
        if (error) return res.status(401).json({ message: "invalid token" });
        req.user = user;
        next();
    })

}