import { Request, Response } from 'express';
import Joi from 'joi';
import BankAccountInfo from '../models/BankAccountInfo';
import User from '../models/User';

const createBankAccountInfoSchema = Joi.object({
    acc_number: Joi.string().pattern(/^\d+$/).required(),
    clabe: Joi.string().pattern(/^\d+$/).required(),
    bank: Joi.string().required(),
    user_id: Joi.number().integer().positive().required(),
});

const updateBankAccountInfoSchema = Joi.object({
    acc_number: Joi.string().pattern(/^\d+$/).required(),
    clabe: Joi.string().pattern(/^\d+$/).required(),
    bank: Joi.string().required(),
});

export const createBankAccountInfo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { acc_number, clabe, bank, user_id } = req.body;

        // Validate request body
        const { error } = createBankAccountInfoSchema.validate({ acc_number, clabe, bank, user_id });
        if (error) {
            res.status(400).json({ error: error.details[0].message });
            return;
        }

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

export const updateBankAccountInfo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { acc_number, clabe, bank } = req.body;

        // Validate request body
        const { error } = updateBankAccountInfoSchema.validate({ acc_number, clabe, bank });
        if (error) {
            res.status(400).json({ error: error.details[0].message });
            return;
        }

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