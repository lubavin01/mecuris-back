import express from 'express';
import { check } from 'express-validator';

import { getEntries, createEntry, getEntryById, deleteEntry } from './entry.controller';

export const entryRouter = express.Router();

entryRouter.get('/', getEntries);
entryRouter.get('/:id',
    getEntryById);
entryRouter.post('/',
    [
        check('title', 'title should be a valid string').notEmpty().isString(),
        check('color', 'color should be a valid string').notEmpty().isString(),
    ],
    createEntry);
entryRouter.delete('/',
    [check('id', 'id should not be empty').notEmpty().isString()],
    deleteEntry)
