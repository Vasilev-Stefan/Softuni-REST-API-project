import jwt from 'jsonwebtoken';

export const generateAuthToken = (user) => {
    const payload = {
        id: user.id,
        email: user.email
    }

    const token = jwt.sign(payload, 'DSADASDASKNGVASJKFNLASJKFNLA', {expiresIn: '2h'});

    return token
}