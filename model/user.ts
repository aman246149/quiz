import mongoose, { Document, Schema } from 'mongoose';

// Define the User interface
export interface User extends Document {
    email: string;
    password: string;
    username: string;
}

// Create the User schema
const userSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true }
});

// Create the User model
const UserModel = mongoose.model<User>('User', userSchema);

export default UserModel;
