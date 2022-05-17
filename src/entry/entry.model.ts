import { Schema, model } from "mongoose";

const entry = new Schema({
    title: String,
    color: String,
    createAt: {
        type: Date,
        default: new Date()
    }
});

export const Entry = model('Entry', entry)
