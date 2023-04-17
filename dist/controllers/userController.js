"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMe = exports.loginUser = exports.registerUser = void 0;
const jwt = require('jsonwebtoken');
// import jwt from 'jsonwebtoken'
const bcrypt = require('bcryptjs');
// import bcrypt from 'bcryptjs'
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const userModel_1 = require("../models/userModel");
// @desc    Register new user
// @route   POST /api/users
// @access  Public
exports.registerUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please fill in all fields');
    }
    // Check if user exists
    const userExists = yield userModel_1.User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }
    // Hash password
    const salt = yield bcrypt.genSalt(10);
    const hashedPassword = yield bcrypt.hash(password, salt);
    // Create user
    const user = yield userModel_1.User.create({
        name,
        email,
        password: hashedPassword,
    });
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
        });
    }
    else {
        res.status(400);
        throw new Error('Invalid user data');
    }
}));
// @desc    Authenticate new user
// @route   POST /api/users/login
// @access  Public
exports.loginUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: 'Login User' });
}));
// @desc    Get user data
// @route   GET /api/users/me
// @access  Public
exports.getMe = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: 'Get Me' });
}));
