import express from 'express';
import { body } from 'express-validator';
import { ResponseMiddleware } from '../middleware/reponse.middleware';

import { getEntries, createEntry, getEntryById, deleteEntry, updateEntry, patchEntry } from './entry.controller';

export const entryRouter = express.Router();

// TODO Validate id

entryRouter.get('/', getEntries);
entryRouter.get('/:id',
    getEntryById);
entryRouter.post('/',
    [
        body('color', 'color should be a valid string').notEmpty().isString(),
        body('width', 'width should be integer greater than 0').isInt({ gt: 0 }),
        body('height', 'height should be integer greater than 0').isInt({ gt: 0 }),
        body('depth', 'depth should be integer greater than 0').isInt({ gt: 0 }),
        body('positionX', 'positionX should be integer between -100 and 100').optional().isInt({ min: -100, max: 100 }),
        body('positionY', 'positionY should be integer between -100 and 100').optional().isInt({ min: -100, max: 100 }),
        body('positionZ', 'positionZ should be integer between -100 and 100').optional().isInt({ min: -100, max: 100 }),
    ],
    createEntry);
entryRouter.put('/:id',
    [
        body('color', 'color should be a valid string').notEmpty().isString(),
        body('width', 'width should be integer greater than 0').isInt({ gt: 0 }),
        body('height', 'height should be integer greater than 0').isInt({ gt: 0 }),
        body('depth', 'depth should be integer greater than 0').isInt({ gt: 0 }),
        body('positionX', 'positionX should be integer between -100 and 100').optional().isInt({ min: -100, max: 100 }),
        body('positionY', 'positionY should be integer between -100 and 100').optional().isInt({ min: -100, max: 100 }),
        body('positionZ', 'positionZ should be integer between -100 and 100').optional().isInt({ min: -100, max: 100 }),
    ],
    updateEntry);

entryRouter.delete('/:id',
    deleteEntry);

entryRouter.patch('/:id',
    body('color', 'color should be a valid string').optional().isString(),
    body('width', 'width should be integer greater than 0').optional().isInt({ gt: 0 }),
    body('height', 'height should be integer greater than 0').optional().isInt({ gt: 0 }),
    body('depth', 'depth should be integer greater than 0').optional().isInt({ gt: 0 }),
    body('positionX', 'positionX should be integer between -100 and 100').optional().isInt({ min: -100, max: 100 }),
    body('positionY', 'positionY should be integer between -100 and 100').optional().isInt({ min: -100, max: 100 }),
    body('positionZ', 'positionZ should be integer between -100 and 100').optional().isInt({ min: -100, max: 100 }),
    patchEntry);

// Making Response
entryRouter.use(ResponseMiddleware);
