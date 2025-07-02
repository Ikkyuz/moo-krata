import { Request, Response } from "express";
import * as queueService from '../services/queue.service'

export const createQueue = async (req: Request, res: Response) => {
    try{
        const queue = await queueService.createQueue(req.body)
        res.status(201).json(queue)
    }catch(error: any){
        res.status(400).json({ message: error.message });
    }
}

export const getQueues = async (req: Request, res: Response) => {
    try {
        const queues = await queueService.getQueue();
        res.status(200).json(queues);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteQueue = async (req: Request, res: Response) => {
    try {
        const queue = await queueService.deleteQueue(req.params.id);
        res.status(200).json(queue);
    }catch(error: any){
        res.status(500).json({ message: error.message });
    }
}