import prisma from "../prisma/prisma";
import { Order } from "@prisma/client";
import { order } from "../interface/order.interface";

export const getAllOrders = async (): Promise<Order[]> => {
  return prisma.order.findMany({
    include: {
      table: true,
      orderItems: true,
    },
  });
};

export const getOrderById = async (id: string): Promise<Order | null> => {
  return prisma.order.findUnique({
    where: { id },
    include: {
      table: true,
      orderItems: true,
    },
  });
};

export const createOrder = async (data: order): Promise<Order> => {
  const { tableId, customerName, status } = data;
  
  if (!tableId) {
    throw new Error("tableId is required");
  }
  
  return prisma.order.create({
    data: {
      tableId,
      customerName,
      status,
    },
  });
};

export const updateOrder = async (id: string, data: order): Promise<Order> => {
  const { tableId, customerName, status } = data;
  
  if (!tableId) {
    throw new Error("tableId is required");
  }

  return prisma.order.update({
    where: { id },
    data: {
      tableId,
      customerName,
      status,
    }
  });
};

export const deleteOrder = async (id: string): Promise<Order> => {
  return prisma.order.delete({ where: { id } });
};
