import User from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { generateAuthToken } from "../utils/tokenUtils.js";




async function register(userData) {
    const user = await User.create(userData);

    const token = generateAuthToken(user);

    return {
        email: user.email,
        accessToken: token,
        _id: user.id
    };
}

async function login(email, password) {
    const user = await User.findOne({email});

    if(!user){
        throw new Error('Invalid email or password!');
    }

    console.log()
    const isValid = await bcrypt.compare(password, user.password);

    if(!isValid){
        throw new Error('Invalid email or password!');
    }

    const payload = {
        id: user.id,
        email: user.email
    }

    const token = generateAuthToken(user);

    console.log('User sucessfully logged!');
    
    return {
        email: user.email,
        accessToken: token,
        _id: user.id
    };
}

export const userService = {
    register,
    login
}