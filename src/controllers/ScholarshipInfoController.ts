import { Request, Response } from 'express';
import User from '../models/User';
import ScholarshipInfo from '../models/ScholarshipInfo';

// Create ScholarshipInfo
export const createScholarshipInfo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { level, kind, period, user_id } = req.body;

        // Check if the user exists before creating the ScholarshipInfo
        const existingUser = await User.findByPk(user_id);
        if (!existingUser) {
            res.status(400).json({ error: 'User does not exist' });
            return;
        }

        const scholarshipInfo = await ScholarshipInfo.create({ level, kind, period, user_id });
        res.status(201).json(scholarshipInfo);
    } catch (error) {
        res.status(500).json({ error: 'Error creating scholarship info' });
    }
};

// Get all ScholarshipInfo
export const getAllScholarshipInfo = async (req: Request, res: Response): Promise<void> => {
    try {
        const scholarshipInfo = await ScholarshipInfo.findAll();
        res.json(scholarshipInfo);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving scholarship info' });
    }
};

// Get ScholarshipInfo by ID
export const getScholarshipInfoById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const scholarshipInfo = await ScholarshipInfo.findByPk(id);
        if (scholarshipInfo) {
            res.json(scholarshipInfo);
        } else {
            res.status(404).json({ error: 'Scholarship info not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving scholarship info' });
    }
};

// Update ScholarshipInfo
export const updateScholarshipInfo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { level, kind, period } = req.body;

        const existingScholarshipInfo = await ScholarshipInfo.findByPk(id);
        if (existingScholarshipInfo) {
            await existingScholarshipInfo.update({ level, kind, period });
            res.json(existingScholarshipInfo);
        } else {
            res.status(404).json({ error: 'Scholarship info not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error updating scholarship info' });
    }
};

// Delete ScholarshipInfo
export const deleteScholarshipInfo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const existingScholarshipInfo = await ScholarshipInfo.findByPk(id);
        if (existingScholarshipInfo) {
            await existingScholarshipInfo.destroy();
            res.json({ message: 'Scholarship info deleted successfully' });
        } else {
            res.status(404).json({ error: 'Scholarship info not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error deleting scholarship info' });
    }
};