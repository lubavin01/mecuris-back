import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { entryCreate, entryDeleteById, entryFindAll, entryFindById } from './entry';


export const getEntries = async (req: Request, res: Response) => {
    try {
        const mainResult = await entryFindAll();
        if (mainResult.err) {
            return res.status(mainResult.status).json({ message: mainResult.message })
        }

        const responseData: { data?: any, message?: string } = {};
        if (mainResult.data) {
            responseData.data = mainResult.data;
        }

        if (mainResult.message) {
            responseData.message = mainResult.message;
        }

        return res.status(mainResult.status).json(responseData);

    } catch (e) {

        res.status(400);
        res.json({ message: e.message });

    }
}

export const getEntryById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const mainResult = await entryFindById(id);

        if (mainResult.err) {
            return res.status(mainResult.status).json({ message: mainResult.message })
        }

        const responseData: { data?: any, message?: string } = {};
        if (mainResult.data) {
            responseData.data = mainResult.data;
        }

        if (mainResult.message) {
            responseData.message = mainResult.message;
        }

        return res.status(mainResult.status).json(responseData);
    } catch (e) {

        res.status(400);
        res.json({ message: e.message });

    }
}

export const createEntry = async (req: Request, res: Response) => {
    try {
        const result = validationResult(req).formatWith(({ msg }) => msg as string);
        if (!result.isEmpty()) {
            return res.status(400).json(result.array());
        }

        const { title, color } = req.body;
        const mainResult = await entryCreate(title, color);

        if (mainResult.err) {
            return res.status(mainResult.status).json({ message: mainResult.message })
        }

        const responseData: { data?: any, message?: string } = {};
        if (mainResult.data) {
            responseData.data = mainResult.data;
        }

        if (mainResult.message) {
            responseData.message = mainResult.message;
        }

        return res.status(mainResult.status).json(responseData);
    } catch (e) {
        res.status(400);
        res.json({ message: e.message });
    }
}

export const deleteEntry = async (req: Request, res: Response) => {
    try {
        const result = validationResult(req).formatWith(({ msg }) => msg as string);
        if (!result.isEmpty()) {
            return res.status(400).json(result.array());
        }

        const { id } = req.body;
        const mainResult = await entryDeleteById(id);

        if (mainResult.err) {
            return res.status(mainResult.status).json({ message: mainResult.message })
        }

        const responseData: { data?: any, message?: string } = {};
        if (mainResult.data) {
            responseData.data = mainResult.data;
        }

        if (mainResult.message) {
            responseData.message = mainResult.message;
        }

        return res.status(mainResult.status).json(responseData);
    } catch (e) {
        res.status(400);
        res.json({ message: e.message });
    }
}
