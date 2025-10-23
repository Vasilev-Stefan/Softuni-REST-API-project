import { Router } from "express";
import { userService } from "../service/userService.js";

export const userController = Router();

userController.post('/register', async (req, res) => {
    const userData = req.body;
    const user = await userService.register(userData);
    res.status(201).json(user);
});