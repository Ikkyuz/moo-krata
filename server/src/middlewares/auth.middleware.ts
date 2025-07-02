import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/config';

interface AuthenticatedRequest extends Request {
  userId?: string;
  userRole?: string;
}

export const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Access Denied: No token provided' });
    return;
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecretKey) as { id: string; role: string };
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  } catch (error) {
    res.status(403).json({ message: 'Access Denied: Invalid token' });
  }
};

export const authorizeRoles = (roles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    if (!req.userRole || !roles.includes(req.userRole)) {
      res.status(403).json({ message: 'Forbidden: You do not have the required role' });
      return;
    }
    next();
  };
};
