import express from 'express';
import {
    createGovernmentInfo,
    getGovernmentInfoById,
    updateGovernmentInfo,
    deleteGovernmentInfo,
} from '../controllers/GovernmentInfoController';

const router = express.Router();

// Create GovernmentInfo
router.post('/governmentInfo', createGovernmentInfo);

// Get GovernmentInfo by ID
router.get('/governmentInfo/:id', getGovernmentInfoById);

// Update GovernmentInfo
router.put('/governmentInfo/:id', updateGovernmentInfo);

// Delete GovernmentInfo
router.delete('/governmentInfo/:id', deleteGovernmentInfo);

export default router;