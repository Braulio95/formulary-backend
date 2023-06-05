import express from 'express';
import {
    createSkill,
    getAllSkills,
    getSkillById,
    updateSkill,
    deleteSkill,
} from '../controllers/SkillController';

const router = express.Router();

// Create Skill
router.post('/skills', createSkill);

// Get all Skills
router.get('/skills', getAllSkills);

// Get Skill by ID
router.get('/skills/:id', getSkillById);

// Update Skill
router.put('/skills/:id', updateSkill);

// Delete Skill
router.delete('/skills/:id', deleteSkill);

export default router;






