import { Router } from "express";
import { userService } from "../service/userService.js";

export const userController = Router();

userController.post('/register', async (req, res) => {
    const userData = req.body;
    const user = await userService.register(userData);
    res.status(201).json(user);
});

userController.post('/login', async (req, res) => {
    const {email, password} = req.body;
    
    try {
        const user = await userService.login(email, password);
        res.status(201).json(user)
    } catch (error) {
        console.log(error)
        res.status(401).json({message: error.message})
    }
})

userController.get('/logout', async (req, res) => {
    console.log(req.user)
    res.json({message: 'ok'})
})