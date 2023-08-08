import { Request, Response, NextFunction } from 'express';

const jwt = require ('jsonwebtoken')

const dotenv = require ('dotenv');
dotenv.config();

interface TokenPayload {
  userId: string;
}

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return res.status(401).json({ message: 'Token error' });
  }

  const [scheme, token] = parts;
  
  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ message: 'Token malformatted' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err: any, decoded: TokenPayload) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    return next();
  });
}

export {authMiddleware};