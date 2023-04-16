import { Request, Response } from 'express'
const jwt = require('jsonwebtoken')
import jwt from 'jsonwebtoken'
const bcrypt = require('bcryptjs')
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'
import { User } from '../models/userModel'

// @desc    Register new user
// @route   POST /api/users
// @access  Public
export const registerUser = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please fill in all fields')
    }
    res.json({ message: 'Register User' })
})

// @desc    Authenticate new user
// @route   POST /api/users/login
// @access  Public
export const loginUser = asyncHandler(async (req: Request, res: Response) => {
    res.json({ message: 'Login User' })
})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Public
export const getMe = asyncHandler(async (req: Request, res: Response) => {
    res.json({ message: 'Get Me' })
})


