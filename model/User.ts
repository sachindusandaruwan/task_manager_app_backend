import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    password: string;
    email: string;
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
}, {
    timestamps: true
});

export const User = mongoose.model<IUser>('User', UserSchema);
