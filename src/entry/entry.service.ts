import { Types } from 'mongoose';
import { IServiceResult } from '../interfaces';

import { Entry, IEntry } from './entry.model';

export async function entryFindAll(): Promise<IServiceResult> {
    const entries = await Entry.find();
    return {
        status: 200,
        data: entries,
    }
}

export async function entryFindById(id: string): Promise<IServiceResult> {
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
            status: 404
        }
    }

    return {
        status: 200,
        data: entry
    }
}

export async function entryDeleteById(id: string): Promise<IServiceResult> {
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

export async function entryCreate(data: IEntry): Promise<IServiceResult> {
    const { color, width, height, depth, positionX, positionY, positionZ } = data;
    const entry = new Entry({ color, width, height, depth, positionX, positionY, positionZ });
    await entry.save();

    return {
        status: 201,
        data: entry,
    }
}

export async function entryUpdate(id: string, data: IEntry): Promise<IServiceResult> {
    if (!Types.ObjectId.isValid(id)) {
        return {
            status: 400,
            err: true,
            message: 'id should be valid',
        }
    }

    let entry = await Entry.findById(id);
    if (!entry) {
        return {
            status: 404,
            err: true,
        }
    }

    await Entry.updateOne({ _id: id }, data);

    return {
        status: 200
    }
}

export async function entryPatch(id: string, data: IEntry): Promise<IServiceResult> {
    if (!Types.ObjectId.isValid(id)) {
        return {
            status: 400,
            err: true,
            message: 'id should be valid',
        }
    }

    let entry = await Entry.findById(id);
    if (!entry) {
        return {
            status: 404,
            err: true,
        }
    }

    const toUpdate = { ...entry };
    if (data.color !== undefined) {
        toUpdate.color = data.color;
    }
    if (data.width !== undefined) {
        toUpdate.width = data.width;
    }
    if (data.height !== undefined) {
        toUpdate.height = data.height;
    }
    if (data.depth !== undefined) {
        toUpdate.depth = data.depth;
    }
    if (data.positionX !== undefined) {
        toUpdate.positionX = data.positionX;
    }
    if (data.positionY !== undefined) {
        toUpdate.positionY = data.positionY;
    }
    if (data.positionZ !== undefined) {
        toUpdate.positionZ = data.positionZ;
    }
    await Entry.updateOne({ _id: id }, toUpdate);

    return {
        status: 200
    }

}
