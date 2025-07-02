import prisma from '../prisma/prisma';
import { User } from '@prisma/client';
import { register, login } from '../interface/auth.interface';
import { hashPassword, comparePassword } from '../utils/password';
import { config } from '../config/config';
import AppError from '../utils/appError';
import jwt from 'jsonwebtoken';

export const registerUser = async (data: register): Promise<User> => {
  const { username, password, role } = data;
  const hashedPassword = await hashPassword(password);
  const user = await prisma.user.create({
    data: {
      username,
      password: hashedPassword,
      role,
    },
  });
  return user;
};

export const loginUser = async (data: login): Promise<{ user: User; token: string }> => {
  const { username, password } = data;
  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user || !(await comparePassword(password, user.password))) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ id: user.id, role: user.role }, config.jwtSecretKey, { expiresIn: '1h' });
  return { user, token };
};

export const getUser = async (): Promise<User[]> => {
  return prisma.user.findMany();
};

export const getUserById = async (id: string): Promise<User> => {
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    throw new AppError('User not found', 404);
  }
  return user;
};
