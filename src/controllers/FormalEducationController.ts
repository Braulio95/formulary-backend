import { Request, Response } from 'express';
import FormalEducationInfo from '../models/FormalEducationInfo';
import User from '../models/User';

// Create FormalEducationInfo
export const createFormalEducationInfo = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            university_name,
            state,
            country,
            career_name,
            classes_completed,
            proof_classes_completed,
            license_completed,
            proof_license_completed,
            user_id,
        } = req.body;

        // Check if the user exists before creating the formal education info
        const existingUser = await User.findByPk(user_id);
        if (!existingUser) {
            res.status(400).json({ error: 'User does not exist' });
            return;
        }

        const formalEducationInfo = await FormalEducationInfo.create({
            university_name,
            state,
            country,
            career_name,
            classes_completed,
            proof_classes_completed,
            license_completed,
            proof_license_completed,
            user_id,
        });
        res.status(201).json(formalEducationInfo);
    } catch (error) {
        res.status(500).json({ error: 'Error creating formal education info' });
    }
};

// Get FormalEducationInfo by ID
export const getFormalEducationInfoById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const formalEducationInfo = await FormalEducationInfo.findByPk(id);
        if (formalEducationInfo) {
            res.json(formalEducationInfo);
        } else {
            res.status(404).json({ error: 'Formal education info not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving formal education info' });
    }
};

// Update FormalEducationInfo
export const updateFormalEducationInfo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const {
            university_name,
            state,
            country,
            career_name,
            classes_completed,
            proof_classes_completed,
            license_completed,
            proof_license_completed,
        } = req.body;

        const existingFormalEducationInfo = await FormalEducationInfo.findByPk(id);
        if (existingFormalEducationInfo) {
            await existingFormalEducationInfo.update({
                university_name,
                state,
                country,
                career_name,
                classes_completed,
                proof_classes_completed,
                license_completed,
                proof_license_completed,
            });
            res.json(existingFormalEducationInfo);
        } else {
            res.status(404).json({ error: 'Formal education info not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error updating formal education info' });
    }
};

// Delete FormalEducationInfo
export const deleteFormalEducationInfo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const existingFormalEducationInfo = await FormalEducationInfo.findByPk(id);
        if (existingFormalEducationInfo) {
            await existingFormalEducationInfo.destroy();
            res.json({ message: 'Formal education info deleted successfully' });
        } else {
            res.status(404).json({ error: 'Formal education info not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error deleting formal education info' });
    }
};