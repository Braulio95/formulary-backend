import express from 'express';
import {
    createFormalEducationInfo,
    getFormalEducationInfoById,
    updateFormalEducationInfo,
    deleteFormalEducationInfo,
} from '../controllers/FormalEducationController';

const router = express.Router();

// Create FormalEducationInfo
router.post('/formaleducation', createFormalEducationInfo);

// Get FormalEducationInfo by ID
router.get('/formaleducatio/:id', getFormalEducationInfoById);

// Update FormalEducationInfo
router.put('/formaleducation/:id', updateFormalEducationInfo);

// Delete FormalEducationInfo
router.delete('/formaleducation/:id', deleteFormalEducationInfo);

export default router;