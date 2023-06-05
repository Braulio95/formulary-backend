import express from 'express';
import {
    createBankAccountInfo,
    getBankAccountInfoById,
    updateBankAccountInfo,
    deleteBankAccountInfo,
} from '../controllers/BankAccountInfoController';

const router = express.Router();

// Create a new BankAccountInfo
router.post('/bankAccountInfos', createBankAccountInfo);

// Get a BankAccountInfo by ID
router.get('/bankAccountInfos/:id', getBankAccountInfoById);

// Update a BankAccountInfo
router.put('/bankAccountInfos/:id', updateBankAccountInfo);

// Delete a BankAccountInfo
router.delete('/bankAccountInfos/:id', deleteBankAccountInfo);

export default router;