// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

// Verify token and user role
function authenticateToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.sendStatus(403);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

// Authorization check for specific roles
function authorizeRoles(...roles) {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) return res.sendStatus(403);
        next();
    };
}

module.exports = { authenticateToken, authorizeRoles };
