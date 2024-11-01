import jwt from 'jsonwebtoken';



const authorize = (req, res, next) => {
    const secretKey = process.env.JWT_SECRET;
    const token = req.headers['authorization']?.split(' ')[1]; // Get token from Authorization header
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            console.log(secretKey);
            console.log(err);
            return res.status(403).json({ message: 'Failed to authenticate token' });
        }

        req.user = decoded; // Save decoded user info to request
        next(); // Proceed to the next middleware or route handler
    });
};

export { authorize }; 
