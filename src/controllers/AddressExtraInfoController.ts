import { Request, Response } from 'express';
import AddressExtraInfo from '../models/AddressExtraInfo';
import Address from '../models/Address';

// Create a new address extra info
export const createAddressExtraInfo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { type_of_residency, other_residency, people, address_id } = req.body;
        const address = await Address.findByPk(address_id);
        if (!address) {
            res.status(404).json({ error: 'Address not found' });
            return;
        }
        const addressExtraInfo = await AddressExtraInfo.create({
            type_of_residency,
            other_residency,
            people,
            address_id
        });
        res.status(201).json(addressExtraInfo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create address extra info' });
    }
};

// Get address extra info by ID
export const getAddressExtraInfoById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const addressExtraInfo = await AddressExtraInfo.findByPk(id);
        if (addressExtraInfo) {
            res.json(addressExtraInfo);
        } else {
            res.status(404).json({ error: 'Address extra info not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch address extra info' });
    }
};

// Update address extra info by ID
export const updateAddressExtraInfo = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { type_of_residency, other_residency, people, address_id } = req.body;
    try {
        const addressExtraInfo = await AddressExtraInfo.findByPk(id);
        if (addressExtraInfo) {
            addressExtraInfo.type_of_residency = type_of_residency;
            addressExtraInfo.other_residency = other_residency;
            addressExtraInfo.people = people;
            addressExtraInfo.address_id = address_id;
            await addressExtraInfo.save();
            res.json(addressExtraInfo);
        } else {
            res.status(404).json({ error: 'Address extra info not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update address extra info' });
    }
};

// Delete address extra info by ID
export const deleteAddressExtraInfo = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const addressExtraInfo = await AddressExtraInfo.findByPk(id);
        if (addressExtraInfo) {
            await addressExtraInfo.destroy();
            res.json({ message: 'Address extra info deleted successfully' });
        } else {
            res.status(404).json({ error: 'Address extra info not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete address extra info' });
    }
};