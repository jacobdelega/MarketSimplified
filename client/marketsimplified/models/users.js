import mongoose from "mongoose";
import { model, Schema, models } from "mongoose";

const socialMediaAccountSchema = new Schema({
    platform: String,
    username: String,
    followerCount: Number,
});

const paymentHistorySchema = new Schema({
    amount: Number,
    campaignId: { type: mongoose.Schema.Types.ObjectId, ref: "Campaign" },
    date: Date,
    status: { type: String, enum: ["paid", "pending", "cancelled"] },
});

const userSchema = new mongoose.Schema(
    {
        name: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String },
        profileImageURL: { type: String, default: "/avatar.png" },
        userType: { type: String, enum: ["company", "influencer"] },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
        provider: { type: String },
        phoneNumber : { type : String },
        isProfileComplete: { type: Boolean, default: false },
        company: {
            companyName: String,
            companyDescription: String,
        },
        influencer: {
            bio: String,
            niche: String,
            socialMediaAccounts: [socialMediaAccountSchema],
            earnings: {
                totalEarned: { type: Number, default: 0 },
                availableBalance: { type: Number, default: 0 },
                pendingPayments: { type: Number, default: 0 },
                paymentHistory: [paymentHistorySchema],
            },
        },
    },
    { timestamps: true }
);

// Create indexes for faster queries
userSchema.index({ email: 1 });
userSchema.index({ userType: 1 });
userSchema.index({ "influencer.earnings.totalEarned": 1 });

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
