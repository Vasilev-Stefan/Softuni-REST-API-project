import jwt from 'jsonwebtoken';

export function authMiddleWare(req, res, next){
    const token = req.header('X-Authorization');

    if(!token){
        return next()
    }

    try {
        const decodedToken = jwt.verify(token, 'DSADASDASKNGVASJKFNLASJKFNLA');
        req.user = decodedToken;

        next();
    } catch (err) {
        res.status(401).json({message: 'Invalid user session'});
    }
}