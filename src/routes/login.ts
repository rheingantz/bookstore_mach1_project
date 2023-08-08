import express, { Router, Request, Response } from 'express';
import { logIn } from '../functions/login';
import dotenv from 'dotenv';
const jwt = require('jsonwebtoken');

dotenv.config();

const router = Router();

router.use(express.json());

router.post('/api/login', async (req: Request, res: Response) => {
  const login = req.body;

  try {

    const isPasswordValid = await logIn(login);

    if (isPasswordValid == false) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const payload = {
      user: login.email,
      expiresIn: '6h'
    };
    
    const token = jwt.sign(payload, process.env.JWT_SECRET);

    res.status(200).json({ message: 'Login successful! your token: ' + token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;