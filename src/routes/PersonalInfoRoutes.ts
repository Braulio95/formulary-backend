import express from 'express';
import {
    createPersonalInfo,
    getPersonalInfoById,
    updatePersonalInfo,
    deletePersonalInfo
} from '../controllers/PersonalInfoController';

const router = express.Router();

// Create a new personal information record
router.post('/personalInfo', createPersonalInfo);

// Get personal information by ID
router.get('/personalInfo/:id', getPersonalInfoById);

// Update personal information by ID
router.put('/personalInfo/:id', updatePersonalInfo);

// Delete personal information by ID
router.delete('/personalInfo/:id', deletePersonalInfo);

export default router;