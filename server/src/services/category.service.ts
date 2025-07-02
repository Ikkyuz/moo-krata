import prisma from '../prisma/prisma';
import { Category } from '@prisma/client';
import { category } from '../interface/category.interface';

export const getAllCategories = async (): Promise<Category[]> => {
    return prisma.category.findMany({
        include: { menus: true },
    });
};

export const getCategoryById = async (id: string): Promise<Category | null> => {
    return prisma.category.findUnique({ 
        where: { id },
        include: { menus: true },
    });
};

export const createCategory = async (data: category): Promise<Category> => {
    const { name } = data;
    return prisma.category.create({ 
        data: { name },
    });
};

export const updateCategory = async (id: string, data: category): Promise<Category> => {
    const { name } = data;
    return prisma.category.update({
        where: { id },
        data:{ name },
    });
};

export const deleteCategory = async (id: string): Promise<Category> => {
    return prisma.category.delete({ where: { id } });
};