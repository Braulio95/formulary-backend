import express from 'express';
import {
    createProfile,
    getProfileById,
    updateProfile,
    deleteProfile
} from '../controllers/ProfileController';

const router = express.Router();

router.post('/profile', createProfile);
router.get('/profile/:id', getProfileById);
router.put('/profile/:id', updateProfile);
router.delete('/profile/:id', deleteProfile);

export default router;