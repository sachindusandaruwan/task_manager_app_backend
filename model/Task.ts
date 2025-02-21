import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document {
    dateTime: Date;
    title: string;
    place: string;
    status: string;
}

const TaskSchema: Schema = new Schema({
    dateTime: { type: Date, required: true },
    title: { type: String, required: true },
    place: { type: String, required: true },
    status: { type: String, required: true, enum: ['pending', 'completed', 'cancelled'] },
}, {
    timestamps: true
});

export const Task = mongoose.model<ITask>('Task', TaskSchema);