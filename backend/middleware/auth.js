const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErr = require("./catchAsyncErr");
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.isAuthedUser = catchAsyncErr(async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return next(new ErrorHandler("Please login to access this resource", 401));
    }
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodedData.id);
    next();
});

exports.authRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(
                new ErrorHandler(`Role: ${req.user.role} is not allowed to access this resource`, 403)
            );
        };
        next();
    };
};