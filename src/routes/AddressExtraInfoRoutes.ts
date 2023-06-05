import express from 'express';
import {
    createAddressExtraInfo,
    getAddressExtraInfoById,
    updateAddressExtraInfo,
    deleteAddressExtraInfo
} from '../controllers/AddressExtraInfoController';

const router = express.Router();

// Create a new address extra info
router.post('/addressExtraInfo', createAddressExtraInfo);

// Get address extra info by ID
router.get('/addressExtraInfo/:id', getAddressExtraInfoById);

// Update address extra info by ID
router.put('/addressExtraInfo/:id', updateAddressExtraInfo);

// Delete address extra info by ID
router.delete('/addressExtraInfo/:id', deleteAddressExtraInfo);

export default router;






