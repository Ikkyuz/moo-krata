import prisma from "../prisma/prisma";
import { OrderItem } from "@prisma/client";
import { orderItem } from "../interface/orderItem.interface";

export const getAllOrderItem = async (): Promise<OrderItem[]> => {
    return prisma.orderItem.findMany({
        include: {
            menu: true,
            order: true,
        },
    });
}

export const getOrderItemById = async (id: string): Promise<OrderItem | null> => {
    return prisma.orderItem.findUnique({ 
      where: { id },
      include: {
        menu: true,
        order: true,
      },
    });
}

export const createOrderItem = async (data: orderItem): Promise<OrderItem> => {
  const { menuId, orderId, quantity } = data;
  
  if (!menuId) {
    throw new Error("menuId is required");
  }
  
  if (!orderId) {
    throw new Error("orderId is required");
  }
  
  return prisma.orderItem.create({ 
    data: {
      menuId,
      orderId,
      quantity,
    }
  });
}

export const updateOrderItem = async (id: string, data: orderItem): Promise<OrderItem> => {
  const { menuId, orderId, quantity } = data;

  if (!menuId) {
    throw new Error("menuId is required");
  }
  
  if (!orderId) {
    throw new Error("orderId is required");
  }
  
  return prisma.orderItem.update({
    where: { id },
    data: {
      menuId,
      orderId,
      quantity,
    }
  });
};

export const deleteOrderItem = async (id: string): Promise<OrderItem> => {
  return prisma.orderItem.delete({ where: { id } });
};