import express from 'express';
import { getUserById, createUser, updateUser, deleteUser } from '../controllers/UserController';

const router = express.Router();

router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;