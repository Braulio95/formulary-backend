import { Request, Response } from 'express';
import Address from '../models/Address';
import User from '../models/User';

// Controller to create a new address
export const createAddress = async (req: Request, res: Response) => {
    try {
        const {
            street,
            in_between_street_a,
            in_between_street_b,
            city,
            state,
            country,
            zip,
            proof_of_address,
            user_id
        } = req.body;

        // Find the associated user
        const user = await User.findByPk(user_id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Create a new address record
        const address = await Address.create({
            street,
            in_between_street_a,
            in_between_street_b,
            city,
            state,
            country,
            zip,
            proof_of_address,
            user_id
        });

        return res.status(201).json(address);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to create address' });
    }
};

// Controller to get an address by ID
export const getAddressById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const address = await Address.findByPk(id);
        if (address) {
            return res.json(address);
        } else {
            return res.status(404).json({ error: 'Address not found' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to get address' });
    }
};

// Controller to update an address by ID
export const updateAddress = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const address = await Address.findByPk(id);
        if (address) {
            await address.update(req.body);
            return res.json(address);
        } else {
            return res.status(404).json({ error: 'Address not found' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to update address' });
    }
};

// Controller to delete an address by ID
export const deleteAddress = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const address = await Address.findByPk(id);
        if (address) {
            await address.destroy();
            return res.json({ message: 'Address deleted successfully' });
        } else {
            return res.status(404).json({ error: 'Address not found' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to delete address' });
    }
};