import { Request, Response } from 'express'

// @desc    Register new user
// @route   POST /api/users
// @access  Public
export const registerUser = (req: Request, res: Response) => {
    res.json({ message: 'Register User' })
}

// @desc    Authenticate new user
// @route   POST /api/users/login
// @access  Public
export const loginUser = (req: Request, res: Response) => {
    res.json({ message: 'Login User' })
}

// @desc    Get user data
// @route   GET /api/users/me
// @access  Public
export const getMe = (req: Request, res: Response) => {
    res.json({ message: 'Get Me' })
}


