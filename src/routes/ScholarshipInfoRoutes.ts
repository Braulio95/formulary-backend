import express from 'express';
import {
    createScholarshipInfo,
    getAllScholarshipInfo,
    getScholarshipInfoById,
    updateScholarshipInfo,
    deleteScholarshipInfo,
} from '../controllers/ScholarshipInfoController';

const router = express.Router();

// Create ScholarshipInfo
router.post('/scholarshipinfo', createScholarshipInfo);

// Get all ScholarshipInfo
router.get('/scholarshipinfo', getAllScholarshipInfo);

// Get ScholarshipInfo by ID
router.get('/scholarshipinfo/:id', getScholarshipInfoById);

// Update ScholarshipInfo
router.put('/scholarshipinfo/:id', updateScholarshipInfo);

// Delete ScholarshipInfo
router.delete('/scholarshipinfo/:id', deleteScholarshipInfo);

export default router;