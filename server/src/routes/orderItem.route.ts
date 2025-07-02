import { Router } from "express";
import * as orderItem from '../controllers/orderItem.controller';

const router = Router()

router.get("/" , orderItem.getAllOrderItem);
router.get("/:id", orderItem.getOrderItemById);
router.post("/", orderItem.getAllOrderItem);
router.put("/:id", orderItem.getAllOrderItem);
router.delete("/:id", orderItem.getAllOrderItem);

export default router;