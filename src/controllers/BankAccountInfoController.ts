import { Request, Response } from 'express';
import BankAccountInfo from '../models/BankAccountInfo';
import User from '../models/User';

// Create BankAccountInfo
export const createBankAccountInfo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { acc_number, clabe, bank, user_id } = req.body;

        // Check if the user exists before creating the bank account info
        const existingUser = await User.findByPk(user_id);
        if (!existingUser) {
            res.status(400).json({ error: 'User does not exist' });
            return;
        }

        const bankAccountInfo = await BankAccountInfo.create({ acc_number, clabe, bank, user_id });
        res.status(201).json(bankAccountInfo);
    } catch (error) {
        res.status(500).json({ error: 'Error creating bank account info' });
    }
};

// Get BankAccountInfo by ID
export const getBankAccountInfoById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const bankAccountInfo = await BankAccountInfo.findByPk(id);
        if (bankAccountInfo) {
            res.json(bankAccountInfo);
        } else {
            res.status(404).json({ error: 'Bank account info not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving bank account info' });
    }
};

// Update BankAccountInfo
export const updateBankAccountInfo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { acc_number, clabe, bank } = req.body;

        const existingBankAccountInfo = await BankAccountInfo.findByPk(id);
        if (existingBankAccountInfo) {
            await existingBankAccountInfo.update({ acc_number, clabe, bank });
            res.json(existingBankAccountInfo);
        } else {
            res.status(404).json({ error: 'Bank account info not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error updating bank account info' });
    }
};

// Delete BankAccountInfo
export const deleteBankAccountInfo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const existingBankAccountInfo = await BankAccountInfo.findByPk(id);
        if (existingBankAccountInfo) {
            await existingBankAccountInfo.destroy();
            res.json({ message: 'Bank account info deleted successfully' });
        } else {
            res.status(404).json({ error: 'Bank account info not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error deleting bank account info' });
    }
};