import mongoose from "mongoose";
import { model, Schema, models } from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String },
    name: { type: String },
    password: { type: String },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
