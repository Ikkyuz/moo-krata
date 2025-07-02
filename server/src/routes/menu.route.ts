import { Router } from 'express';
import * as menuController  from '../controllers/menu.controller';
import { authenticateToken, authorizeRoles } from '../middlewares/auth.middleware';
import { upload } from '../middlewares/upload.middleware';

const router = Router();

router.post('/', authenticateToken, authorizeRoles(['admin']), upload.single('picture'), menuController.createMenu);
router.get('/', menuController.getMenus);
router.get('/:id', menuController.getMenuById);
router.put('/:id', authenticateToken, authorizeRoles(['admin']), upload.single('picture'), menuController.updateMenu);
router.delete('/:id', authenticateToken, authorizeRoles(['admin']), menuController.deleteMenu);

export default router;