import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { entryCreate, entryDeleteById, entryFindAll, entryFindById, entryPatch, entryUpdate } from './entry.service';

export const getEntries = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const mainResult = await entryFindAll();

        res.locals.mainResult = mainResult;
        return next();
    } catch (e) {
        res.status(400);
        return res.json({ message: e.message });
    }
};

export const getEntryById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const mainResult = await entryFindById(id);

        res.locals.mainResult = mainResult;
        return next();
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
};

export const createEntry = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = validationResult(req).formatWith(({ msg }) => msg as string);
        if (!result.isEmpty()) {
            return res.status(400).json(result.array());
        }

        const { color, width, height, depth, positionX = 0, positionY = 0, positionZ = 0 } = req.body;
        const mainResult = await entryCreate({ color, width, height, depth, positionX, positionY, positionZ });

        res.locals.mainResult = mainResult;
        return next();
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
};

export const updateEntry = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = validationResult(req).formatWith(({ msg }) => msg as string);
        if (!result.isEmpty()) {
            return res.status(400).json(result.array());
        }

        const { id } = req.params;
        const { color, width, height, depth, positionX = 0, positionY = 0, positionZ = 0 } = req.body;
        const mainResult = await entryUpdate(id, { color, width, height, depth, positionX, positionY, positionZ });

        res.locals.mainResult = mainResult;
        return next();
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
};

export const deleteEntry = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = validationResult(req).formatWith(({ msg }) => msg as string);
        if (!result.isEmpty()) {
            return res.status(400).json(result.array());
        }

        const { id } = req.params;
        const mainResult = await entryDeleteById(id);

        res.locals.mainResult = mainResult;
        return next();
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
};

export const patchEntry = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = validationResult(req).formatWith(({ msg }) => msg as string);
        if (!result.isEmpty()) {
            return res.status(400).json(result.array());
        }

        const { id } = req.params;
        const { color, width, height, depth, positionX, positionY, positionZ } = req.body;
        const mainResult = await entryPatch(id, { color, width, height, depth, positionX, positionY, positionZ });
        res.locals.mainResult = mainResult;
        return next();
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
};
