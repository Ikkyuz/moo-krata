import { Router } from 'express';
import { createQueue, getQueues, deleteQueue } from '../controllers/queue.controller';
import { authenticateToken, authorizeRoles } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', getQueues);
router.post('/', authenticateToken, authorizeRoles(['staff', 'admin']) , createQueue);
router.delete('/:id', authenticateToken, authorizeRoles(['staff', 'admin']), deleteQueue);

export default router;