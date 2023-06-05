import express from 'express';
import {
    createAddress,
    getAddressById,
    updateAddress,
    deleteAddress
} from '../controllers/AddressInfoController';

const router = express.Router();

// Create a new address
router.post('/addressInfo', createAddress);

// Get address by ID
router.get('/addressInfo/:id', getAddressById);

// Update address by ID
router.put('/addressInfo/:id', updateAddress);

// Delete address by ID
router.delete('/addressInfo/:id', deleteAddress);

export default router;