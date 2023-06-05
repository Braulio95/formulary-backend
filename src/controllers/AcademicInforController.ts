import { Request, Response } from 'express';
import AcademicInfo from '../models/AcademicInfo';
import User from '../models/User';

// Create AcademicInfo
export const createAcademicInfo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { software_devel_comments, degree_level, informal_education, other_education, user_id } = req.body;

        // Check if the user exists before creating the academic info
        const existingUser = await User.findByPk(user_id);
        if (!existingUser) {
            res.status(400).json({ error: 'User does not exist' });
            return;
        }

        const academicInfo = await AcademicInfo.create({ software_devel_comments, degree_level, informal_education, other_education, user_id });
        res.status(201).json(academicInfo);
    } catch (error) {
        res.status(500).json({ error: 'Error creating academic info' });
    }
};

// Get AcademicInfo by ID
export const getAcademicInfoById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const academicInfo = await AcademicInfo.findByPk(id);
        if (academicInfo) {
            res.json(academicInfo);
        } else {
            res.status(404).json({ error: 'Academic info not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving academic info' });
    }
};

// Update AcademicInfo
export const updateAcademicInfo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { software_devel_comments, degree_level, informal_education, other_education } = req.body;

        const existingAcademicInfo = await AcademicInfo.findByPk(id);
        if (existingAcademicInfo) {
            await existingAcademicInfo.update({ software_devel_comments, degree_level, informal_education, other_education });
            res.json(existingAcademicInfo);
        } else {
            res.status(404).json({ error: 'Academic info not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error updating academic info' });
    }
};

// Delete AcademicInfo
export const deleteAcademicInfo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const existingAcademicInfo = await AcademicInfo.findByPk(id);
        if (existingAcademicInfo) {
            await existingAcademicInfo.destroy();
            res.json({ message: 'Academic info deleted successfully' });
        } else {
            res.status(404).json({ error: 'Academic info not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error deleting academic info' });
    }
};