import { Schema, model } from 'mongoose';

export interface IEntry {
    color?: string;
    width?: number;
    height?: number;
    depth?: number;
    positionX?: number;
    positionY?: number;
    positionZ?: number;
}

export interface IEntryWithId extends IEntry {
    _id: string;
}

const entry = new Schema({
    color: String,
    width: Number,
    height: Number,
    depth: Number,
    positionX: Number,
    positionY: Number,
    positionZ: Number,

    createAt: {
        type: Date,
        default: new Date(),
    },
});

export const Entry = model<IEntryWithId>('Entry', entry);
