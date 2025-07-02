import prisma from '../prisma/prisma';
import { Menu } from '@prisma/client';
import { menu } from '../interface/menu.interface';

export const createMenu = async (data: menu, file?: Express.Multer.File): Promise<Menu> => {
  const { name, description, isActive, categoryId } = data;

  if (!categoryId) {
    throw new Error('categoryId is required');
  }

  const picture = file ? `/images/${file.filename}` : null;

  const active = Boolean(isActive);

  return prisma.menu.create({
    data: {
      name,
      description,
      picture,
      isActive: active,
      category: {
        connect: { id: categoryId },
      },
    },
  });
};

export const getAllMenu = async (): Promise<Menu[]> => {
  return prisma.menu.findMany({ include: { category: true } });
};

export const getMenuById = async (id: string): Promise<Menu | null> => {
  return prisma.menu.findUnique({ 
    where: { id },
    include: { category: true },
  });
};

export const updateMenu = async (id: string, data: menu, file?: Express.Multer.File): Promise<Menu> => {
  const { name, description, isActive, categoryId } = data;

  if (!categoryId) {
    throw new Error('categoryId is required');
  }

  const picture = file ? `/images/${file.filename}` : null;

  const active = Boolean(isActive);

  return prisma.menu.update({
    where: { id },
    data: {
      name,
      description,
      picture,
      isActive: active,
      category: {
        connect: { id: categoryId },
      },
    },
  });
};

export const deleteMenu = async (id: string): Promise<Menu> => {
  return prisma.menu.delete({ where: { id } });
};