import { Types } from 'mongoose';

import { Entry } from './entry.model';

interface IResult {
    status: number,
    err?: boolean,
    message?: string,
    data?: any
}

export async function entryFindAll(): Promise<IResult> {
    const entries = await Entry.find();
    return {
        status: 200,
        data: entries,
    }
}

export async function entryFindById(id: string): Promise<IResult> {
    const entry = await Entry.findById(id);
    if (!entry) {
        return {
            status: 404
        }
    }

    return {
        status: 200,
        data: entry
    }
}

export async function entryDeleteById(id: string): Promise<IResult> {
    if (!Types.ObjectId.isValid(id)) {
        return {
            status: 400,
            err: true,
            message: 'id should be valid',
        }
    }

    const entry = await Entry.findById(id);

    if (!entry) {
        return {
            status: 404,
            err: true,
        }
    }

    await Entry.deleteOne({ id });
    return {
        status: 200
    }
}

export async function entryCreate(title: string, color: string): Promise<IResult> {
    const entry = new Entry({ title, color });
    await entry.save();

    return {
        status: 201,
        data: entry,
    }
}
