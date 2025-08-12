import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

export const userModel = mongoose.model("User", userSchema);

const contentSchema = new mongoose.Schema({
    title: {
        type: String
    },
    link: {
        type: String
    },
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag"
    }],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

export const contentModel = mongoose.model("Content", contentSchema);