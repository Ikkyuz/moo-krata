import express from 'express';
import * as categoryController from '../controllers/category.controller';
import { authenticateToken, authorizeRoles } from '../middlewares/auth.middleware';

const router = express.Router();

router.get("/", categoryController.getAllCategories);
router.get("/:id", categoryController.getCategoryById);
router.post("/", authenticateToken, authorizeRoles(['admin']), categoryController.createCategory);
router.put("/:id", authenticateToken, authorizeRoles(['admin']), categoryController.updateCategory);
router.delete("/:id", authenticateToken, authorizeRoles(['admin']), categoryController.deleteCategory);


export default router;
