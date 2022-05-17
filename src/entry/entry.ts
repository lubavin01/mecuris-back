import { Types } from 'mongoose';

import { Entry, IEntry, IEntryWithId } from './entry.model';

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

    await Entry.deleteOne({ _id: id });
    return {
        status: 200
    }
}

export async function entryCreate(data: IEntry): Promise<IResult> {
    const { color, width, height, depth, positionX, positionY, positionZ } = data;
    const entry = new Entry({ color, width, height, depth, positionX, positionY, positionZ });
    await entry.save();

    return {
        status: 201,
        data: entry,
    }
}

export async function entryUpdate(data: IEntryWithId): Promise<IResult> {
    const { id, ...update } = data;
    let entry = await Entry.findById(id);
    if (!entry) {
        return {
            status: 404,
            err: true,
        }
    }

    await Entry.updateOne({ _id: id }, update);

    return {
        status: 200
    }
}
