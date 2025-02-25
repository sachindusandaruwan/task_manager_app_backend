import { Request, Response } from "express";
import {User} from "../model/User";
import  {generateAccessToken, generateRefreshToken} from "../utill/GenerateToken";
import jwt, {Secret} from "jsonwebtoken";



export const signUpUser = async (req: any, res: any) => {
    const { name, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists with this email. Use another email." });
        }

        const user = await User.create({
            name, email, password
        });

        if (user) {
            const accessToken = generateAccessToken(user._id as string);
            const refreshToken = generateRefreshToken(user._id as string);

            await user.save();

            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                accessToken,
                refreshToken
            });
        } else {
            res.status(400).json({ message: "Invalid user data" });
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Internal server error" });
    }
};


export const signInUser = async (req: any, res: any) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const accessToken = generateAccessToken(user._id as string);
        const refreshToken = generateRefreshToken(user._id as string);

        await user.save();

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            accessToken,
            refreshToken
        });
    } catch (e) {
        res.status(500).json({ message: "Internal server error" });
    }
};

export const refreshToken = async (req: any, res: any) => {
    const authHeader = req.headers.authorization;
    const refreshToken = authHeader?.split(' ')[1];

    if (!refreshToken) {
        return res.status(401).json({ message: "No refresh token provided" });
    }
    try {
        const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET as Secret) as { userId: string };
        const newAccessToken = generateAccessToken(payload.userId);



        res.json({ accessToken: newAccessToken });
    } catch (e) {
        res.status(403).json({ message: "Invalid or expired refresh token" });
    }
};