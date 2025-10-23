import User from "../models/user.js";
import bcrypt from 'bcrypt';




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

    console.log('User sucessfully logged!');
    return user;
}

export const userService = {
    register,
    login
}