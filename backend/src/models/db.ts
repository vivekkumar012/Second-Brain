import mongoose from "mongoose";

// User Schema
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

// Content Schema
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

// LinkSchema 
const linkSchema = new mongoose.Schema({
    hash: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    }
})

export const linkModel = mongoose.model("Link", linkSchema);