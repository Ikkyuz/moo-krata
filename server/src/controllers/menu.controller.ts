import { Request, Response } from 'express';
import * as menuService from '../services/menu.service';

export const createMenu = async (req: Request, res: Response) => {
  try {
    const menu = await menuService.createMenu(req.body, req.file);
    res.status(201).json(menu);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};



export const getMenus = async (req: Request, res: Response) => {
  try {
    const menus = await menuService.getAllMenu();
    res.status(200).json(menus);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getMenuById = async (req: Request, res: Response) => {
  try {
    const menu = await menuService.getMenuById(req.params.id);

    if (menu) {
      menu.picture = menu.picture ? `${req.protocol}://${req.get('host')}${menu.picture}` : null;
    }
    res.status(200).json(menu);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateMenu = async (req: Request, res: Response) => {
  try {
    const menu = await menuService.updateMenu(req.params.id, req.body);
    res.status(200).json(menu);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteMenu = async (req: Request, res: Response) => {
  try {
    const menu = await menuService.deleteMenu(req.params.id);
    res.status(200).json(menu);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};