import express from 'express';
import {
    createAcademicInfo,
    getAcademicInfoById,
    updateAcademicInfo,
    deleteAcademicInfo
} from '../controllers/AcademicInforController';

const router = express.Router();

// Create a new address extra info
router.post('/academicInfo', createAcademicInfo);

// Get address extra info by ID
router.get('/academicInfo/:id', getAcademicInfoById);

// Update address extra info by ID
router.put('/academicInfo/:id', updateAcademicInfo);

// Delete address extra info by ID
router.delete('/academicInfo/:id', deleteAcademicInfo);

export default router;

