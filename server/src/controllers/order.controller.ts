import { Request, Response } from "express";
import * as orderService from "../services/order.service";

export const getAllOrders = async (req: Request, res: Response) => {
    try{
        const orders = await orderService.getAllOrders();
        res.json(orders);
    }catch (error: any) {
    res.status(500).json({ message: error.message });
    }
};

export const getOrderById = async (req: Request, res: Response) => {
    try{
        const order = await orderService.getOrderById(req.params.id);
        res.json(order);
    }catch(error: any){
        res.status(500).json({ message: error.message });
    }
};

export const createOrder = async (req: Request, res: Response) => {
    try{
        const order = orderService.createOrder(req.body);
        res.json(order);
    }catch(error: any){
        res.status(500).json({ message: error.message });
    }
};

export const updateOrder = async (req: Request, res: Response) => {
    try{
        const order = await orderService.updateOrder(req.params.id, req.body);
        res.json(order);
    }catch(error: any){
        res.status(500).json({ message: error.message });
    }
};

export const deleteOrder = async (req: Request, res: Response) => {
    try{
        const order = await orderService.deleteOrder(req.params.id);
        res.json(order);
    }catch(error: any){
        res.status(500).json({ message: error.message });
    }
};