import express from 'express';
import { check } from 'express-validator';

import { getEntries, createEntry, getEntryById, deleteEntry, updateEntry } from './entry.controller';

export const entryRouter = express.Router();

entryRouter.get('/', getEntries);
entryRouter.get('/:id',
    getEntryById);
entryRouter.post('/',
    [
        check('color', 'color should be a valid string').notEmpty().isString(),
        check('width', 'width should be numeric').notEmpty().isNumeric(),
        check('height', 'height should be numeric').notEmpty().isNumeric(),
        check('depth', 'depth should be numeric').notEmpty().isNumeric(),
        // check('positionX', 'positionX should be numeric').notEmpty().isNumeric(),
        // check('positionY', 'positionY should be numeric').notEmpty().isNumeric(),
        // check('positionZ', 'positionZ should be numeric').notEmpty().isNumeric(),
    ],
    createEntry);
entryRouter.put('/',
    [
        check('id', 'id should be a valid string').notEmpty().isString(),
        check('color', 'color should be a valid string').notEmpty().isString(),
        check('width', 'width should be numeric').notEmpty().isNumeric(),
        check('height', 'height should be numeric').notEmpty().isNumeric(),
        check('depth', 'depth should be numeric').notEmpty().isNumeric(),
        // check('positionX', 'positionX should be numeric').notEmpty().isNumeric(),
        // check('positionY', 'positionY should be numeric').notEmpty().isNumeric(),
        // check('positionZ', 'positionZ should be numeric').notEmpty().isNumeric(),
    ],
    updateEntry);

entryRouter.delete('/:id',
    deleteEntry)
