import User from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';




async function register(userData) {
    const user = await User.create(userData);
    console.log(user);
    return user;
}

async function login(email, password) {
    const user = await User.findOne({email});

    if(!user){
        throw new Error('Invalid email or password!');
    }

    const isValid = bcrypt.compare(password, user.password);

    if(!isValid){
        throw new Error('Invalid email or password!');
    }

    const payload = {
        id: user.id,
        email: user.email
    }

    const token = jwt.sign(payload, 'DSADASDASKNGVASJKFNLASJKFNLA', {expiresIn: '2h'});

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