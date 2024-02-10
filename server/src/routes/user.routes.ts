import express from 'express';
import { signUp, login, getUserName } from '../controllers/user.controller';
import authenticateToken from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);
router.get('/user', authenticateToken, getUserName);

export default router;
