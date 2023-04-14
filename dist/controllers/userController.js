"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMe = exports.loginUser = exports.registerUser = void 0;
// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = (req, res) => {
    res.json({ message: 'Register User' });
};
exports.registerUser = registerUser;
// @desc    Authenticate new user
// @route   POST /api/users/login
// @access  Public
const loginUser = (req, res) => {
    res.json({ message: 'Login User' });
};
exports.loginUser = loginUser;
// @desc    Get user data
// @route   GET /api/users/me
// @access  Public
const getMe = (req, res) => {
    res.json({ message: 'Get Me' });
};
exports.getMe = getMe;
