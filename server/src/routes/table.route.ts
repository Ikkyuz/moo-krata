import { Router } from 'express';
import * as tableController from '../controllers/table.controller';
import { authenticateToken, authorizeRoles } from '../middlewares/auth.middleware';

const router = Router();

router.post('/', authenticateToken, authorizeRoles(['staff', 'admin']), tableController.createTable);
router.get('/', tableController.getAllTables);
router.get('/:id', tableController.getTableById);
router.get('/:id/qrcode', tableController.generateTableQRCodeHandler);
router.put('/:id', authenticateToken, authorizeRoles(['staff', 'admin']), tableController.updateTable);
router.delete('/:id', authenticateToken, authorizeRoles(['staff', 'admin']), tableController.deleteTable);


export default router;