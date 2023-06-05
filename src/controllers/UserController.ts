import { Request, Response } from 'express';
import User from '../models/User';
import Joi from 'joi';

// User Validation Schema
const createUserSchema = Joi.object({
    username: Joi.string().required(),
    firstname: Joi.string().min(3).max(30).regex(/^[a-zA-Z0-9_-]+$/),
    lastname: Joi.string().email().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().pattern(/^\d{10}$/).required(),
});

export const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);

        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving user' });
    }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { error, value } = createUserSchema.validate(req.body);

        if (error) {
            res.status(400).json({ error: error.details[0].message });
            return;
        }

        const { username, firstname, lastname, email, phone } = value;
        const user = await User.create({ username, firstname, lastname, email, phone });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { error, value } = createUserSchema.validate(req.body);

        if (error) {
            res.status(400).json({ error: error.details[0].message });
            return;
        }

        const { username, firstname, lastname, email, phone } = value;

        const user = await User.findByPk(id);

        if (user) {
            await user.update({ username, firstname, lastname, email, phone });
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error updating user' });
    }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);

        if (user) {
            await user.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error deleting user' });
    }
};