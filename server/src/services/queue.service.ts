import prisma from "../prisma/prisma";
import { Queue } from "@prisma/client";
import { queue } from "../interface/queue.interface";

export const createQueue = async (data: queue): Promise<Queue> => {
    const { queueNumber, customerName, status, tableId } = data;
    return prisma.queue.create({ 
        data: {
            queueNumber,
            customerName,
            status,
            tableId,
        }
    });
};

export const getQueue = async (): Promise<Queue[]> => {
    return prisma.queue.findMany({ 
        include: { table: true } 
    });
};

export const deleteQueue = async (id: string): Promise<Queue> => {
    return prisma.queue.delete({ where: { id } });
};