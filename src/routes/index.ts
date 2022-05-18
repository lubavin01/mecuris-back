import express, { Response } from 'express';

import { entryRouter } from '../entry/entry.route';

export const appRouter = express.Router();

// Entries
appRouter.use('/api/v1/entries', entryRouter);

// Other requests
appRouter.use('*', (req, res: Response) => {
    return res.status(501).json({});
});
