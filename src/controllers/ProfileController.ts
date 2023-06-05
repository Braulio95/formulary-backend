import { Request, Response } from 'express';
import Profile from '../models/Profile';
import User from '../models/User';

// Create Profile
export const createProfile = async (req: Request, res: Response): Promise<void> => {
    try {
        const { phone, country_code, email, alt_email, reference, other_reference, user_id } = req.body;

        // Check if the user exists before creating the profile
        const existingUser = await User.findByPk(user_id);
        if (!existingUser) {
            res.status(400).json({ error: 'User does not exist' });
            return;
        }

        const profile = await Profile.create({ phone, country_code, email, alt_email, reference, other_reference, user_id });
        res.status(201).json(profile);
    } catch (error) {
        res.status(500).json({ error: 'Error creating profile' });
    }
};

// Get Profile by ID
export const getProfileById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const profile = await Profile.findByPk(id);
        if (profile) {
            res.json(profile);
        } else {
            res.status(404).json({ error: 'Profile not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving profile' });
    }
};

// Update Profile
export const updateProfile = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { phone, country_code, alt_email, reference, other_reference } = req.body;

        const existingProfile = await Profile.findByPk(id);
        if (existingProfile) {
            await existingProfile.update({ phone, country_code, alt_email, reference, other_reference });
            res.json(existingProfile);
        } else {
            res.status(404).json({ error: 'Profile not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error updating profile' });
    }
};

// Delete Profile
export const deleteProfile = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const existingProfile = await Profile.findByPk(id);
        if (existingProfile) {
            await existingProfile.destroy();
            res.json({ message: 'Profile deleted successfully' });
        } else {
            res.status(404).json({ error: 'Profile not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error deleting profile' });
    }
};