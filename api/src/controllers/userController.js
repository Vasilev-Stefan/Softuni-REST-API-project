import { Router } from "express";

export const userController = Router();

userController.post('/register', (req, res) => {
    const {email, password} = req.body;
    console.log(email);
    console.log(password);
});