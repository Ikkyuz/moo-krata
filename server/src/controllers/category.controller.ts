import { Request, Response } from 'express';
import * as categoryService from '../services/category.service';

export const getAllCategories = async (req: Request, res: Response) => {
    try {
        const categories = await categoryService.getAllCategories();
        res.status(200).json(categories);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getCategoryById = async (req: Request, res: Response) => {
    try {
        const category = await categoryService.getCategoryById(req.params.id);
        res.status(200).json(category);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const createCategory = async (req: Request, res: Response) => {
    try {
        const category = await categoryService.createCategory(req.body);
        res.status(201).json(category);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const updateCategory = async (req: Request, res: Response) => {
    try {
        const category = await categoryService.updateCategory(req.params.id, req.body);
        res.status(200).json(category);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const category = await categoryService.deleteCategory(req.params.id);
        res.status(200).json(category);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};