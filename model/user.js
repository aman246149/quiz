import mongoose from 'mongoose';

// First define the schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true }
});

// Then create the model
const UserModel = mongoose.model('User', userSchema);

export default UserModel;
