import { Request, Response } from 'express';
import PersonalInfo from '../models/PersonalInfo';
import User from '../models/User';

// Controller to create new personal information
export const createPersonalInfo = async (req: Request, res: Response) => {
    try {
        const {
            name,
            last_name,
            second_lastname,
            gender,
            gender_other,
            date_of_birth,
            city_of_birth,
            state_of_birth,
            country_of_birth,
            user_id
        } = req.body;

        // Find the associated user
        const user = await User.findByPk(user_id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Create a new personal information record
        const personalInfo = await PersonalInfo.create({
            name,
            last_name,
            second_lastname,
            gender,
            gender_other,
            date_of_birth,
            city_of_birth,
            state_of_birth,
            country_of_birth,
            user_id
        });

        return res.status(201).json(personalInfo);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to create personal information' });
    }
};

// Controller to get personal information by ID
export const getPersonalInfoById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const personalInfo = await PersonalInfo.findByPk(id);
        if (personalInfo) {
            return res.json(personalInfo);
        } else {
            return res.status(404).json({ error: 'Personal information not found' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to get personal information' });
    }
};

// Controller to update personal information by ID
export const updatePersonalInfo = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const personalInfo = await PersonalInfo.findByPk(id);
        if (personalInfo) {
            await personalInfo.update(req.body);
            return res.json(personalInfo);
        } else {
            return res.status(404).json({ error: 'Personal information not found' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to update personal information' });
    }
};

// Controller to delete personal information by ID
export const deletePersonalInfo = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const personalInfo = await PersonalInfo.findByPk(id);
        if (personalInfo) {
            await personalInfo.destroy();
            return res.json({ message: 'Personal information deleted successfully' });
        } else {
            return res.status(404).json({ error: 'Personal information not found' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to delete personal information' });
    }
};