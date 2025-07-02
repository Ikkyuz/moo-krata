import { Request, Response } from 'express';
import * as OrderItemService from '../services/orderItem.service';

export const getAllOrderItem = async (req: Request, res: Response) => {
    try{
        const orderItems = await OrderItemService.getAllOrderItem();
        res.json(orderItems);
    }catch(error: any){
        res.status(500).json({ message: error.message });
    }
};

export const getOrderItemById = async (req: Request, res: Response) => {
    try{ 
        const orderItem = await OrderItemService.getOrderItemById(req.params.id);
        res.json(orderItem);
    }catch(error: any){
        res.status(500).json({ message: error.message });
    }
};

export const createOrderItem = async (req: Request, res: Response) => {
    try{
        const orderItem = await OrderItemService.createOrderItem(req.body);
        res.json(orderItem);
    }catch(error: any){
        res.status(500).json({ message: error.message });
    }
};

export const updateOrderItem = async (req: Request, res: Response) => {
    try{
        const orderItem = await OrderItemService.updateOrderItem(req.params.id, req.body);
        res.json(orderItem);
    }catch(error: any){
        res.status(500).json({ message: error.message });
    }
};

export const deleteOrderItem = async (req: Request, res: Response) => {
    try{
        const orderItem = await OrderItemService.deleteOrderItem(req.params.id);
        res.json(orderItem);
    }catch(error: any){
        res.status(500).json({ message: error.message });
    }
};