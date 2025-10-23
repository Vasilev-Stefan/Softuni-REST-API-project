import User from "../models/user.js";




async function register(userData) {
    const user = await User.create(userData);
    console.log(user);
    return user;
}

export const userService = {
    register
}