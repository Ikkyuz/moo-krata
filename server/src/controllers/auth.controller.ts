import { Request, Response } from 'express';
import * as authService from '../services/auth.service';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, password, role } = req.body;
    const user = await authService.registerUser({ username, password, role });
    res.status(201).json({
      message: 'User registered successfully',
      user: { id: user.id, username: user.username, role: user.role },
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    const result = await authService.loginUser({ username, password });

    if (!result) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const { user, token } = result;

    res.status(200).json({
      message: 'Logged in successfully',
      user: { id: user.id, username: user.username, role: user.role },
      token,
    });
  } catch (error: any) {
    res.status(401).json({ message: error.message || 'Login error' });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const users = await authService.getUser();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await authService.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: 'User not found' });
  }
};