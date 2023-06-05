import { Request, Response } from 'express';
import Skill from '../models/Skill';
import User from '../models/User';

// Create Skill
export const createSkill = async (req: Request, res: Response): Promise<void> => {
    try {
        const { preferred_programming_language, experience, disability, user_id } = req.body;

        // Check if the user exists before creating the skill
        const existingUser = await User.findByPk(user_id);
        if (!existingUser) {
            res.status(400).json({ error: 'User does not exist' });
            return;
        }

        const skill = await Skill.create({ preferred_programming_language, experience, disability, user_id });
        res.status(201).json(skill);
    } catch (error) {
        res.status(500).json({ error: 'Error creating skill' });
    }
};

// Get all Skills
export const getAllSkills = async (req: Request, res: Response): Promise<void> => {
    try {
        const skills = await Skill.findAll();
        res.json(skills);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving skills' });
    }
};

// Get Skill by ID
export const getSkillById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const skill = await Skill.findByPk(id);
        if (skill) {
            res.json(skill);
        } else {
            res.status(404).json({ error: 'Skill not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving skill' });
    }
};

// Update Skill
export const updateSkill = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { preferred_programming_language, experience, disability } = req.body;

        const existingSkill = await Skill.findByPk(id);
        if (existingSkill) {
            await existingSkill.update({ preferred_programming_language, experience, disability });
            res.json(existingSkill);
        } else {
            res.status(404).json({ error: 'Skill not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error updating skill' });
    }
};

// Delete Skill
export const deleteSkill = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const existingSkill = await Skill.findByPk(id);
        if (existingSkill) {
            await existingSkill.destroy();
            res.json({ message: 'Skill deleted successfully' });
        } else {
            res.status(404).json({ error: 'Skill not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error deleting skill' });
    }
};