/* eslint-disable import/no-unresolved */
import express, { Response } from 'express';

import entryRouter from '../entry/entry.route';

const appRouter = express.Router();

// Entries
appRouter.use('/api/v1/entries', entryRouter);

// Other requests
appRouter.use('*', (req, res: Response) => res.status(501).json({}));

export default appRouter;
