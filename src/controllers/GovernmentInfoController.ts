import { Request, Response } from 'express';
import GovernmentInfo from '../models/GovernmentInfo';
import User from '../models/User';

// Create GovernmentInfo
export const createGovernmentInfo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { curp, identification_number, user_id } = req.body;

        // Verificar la existencia del usuario
        const user = await User.findByPk(user_id);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }

        const governmentInfo = await GovernmentInfo.create({ curp, identification_number, user_id });
        res.status(201).json(governmentInfo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create government info' });
    }
};

// Get GovernmentInfo by ID
export const getGovernmentInfoById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const governmentInfo = await GovernmentInfo.findByPk(id);

        if (governmentInfo) {
            res.status(200).json(governmentInfo);
        } else {
            res.status(404).json({ error: 'GovernmentInfo not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve government info' });
    }
};

// Update GovernmentInfo
export const updateGovernmentInfo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { curp, identification_number } = req.body;

        const governmentInfo = await GovernmentInfo.findByPk(id);

        if (governmentInfo) {
            governmentInfo.curp = curp;
            governmentInfo.identification_number = identification_number;

            await governmentInfo.save();

            res.status(200).json(governmentInfo);
        } else {
            res.status(404).json({ error: 'GovernmentInfo not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update government info' });
    }
};

// Delete GovernmentInfo
export const deleteGovernmentInfo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const governmentInfo = await GovernmentInfo.findByPk(id);

        if (governmentInfo) {
            await governmentInfo.destroy();
            res.status(200).json({ message: 'GovernmentInfo deleted successfully' });
        } else {
            res.status(404).json({ error: 'GovernmentInfo not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete government info' });
    }
};