import prisma from "../prisma/prisma";
import { Table } from "@prisma/client";
import { table } from "../interface/table.interface";
import { generateQRCode } from "../utils/qrcode";

export const getAllTables = async (): Promise<Table[]> => {
    return prisma.table.findMany({
        include: {
            queue: true,
            orders: true,
        },
    });
};

export const getTableById = async (id: string): Promise<Table | null> => {
    return prisma.table.findUnique({ 
        where: { id },
        include: { 
            queue: true,
            orders: true,
        },
    });
};

export const createTable = async (data: table): Promise<Table> => {
    const { tableNumber, status, capacity } = data;
    return prisma.table.create({ 
        data: {
            tableNumber,
            status,
            capacity,
        }
    });
};

export const updateTable = async (id: string, data: table): Promise<Table> => {
    const { tableNumber, status, capacity } = data;
    return prisma.table.update({
        where: { id },
        data: {
            tableNumber,
            status,
            capacity,
        },
    });
};

export const deleteTable = async (id: string): Promise<Table> => {
    return prisma.table.delete({ where: { id } });
};

export const generateTableQRCode = async (tableId: string): Promise<string> => {
    const url = `https://yourdomain.com/menu/${tableId}`;
    return await generateQRCode(url);
};