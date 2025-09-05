import { contentModel, linkModel, userModel } from "../models/db.js";
import { random } from "./utils.js";

export const createContent = async (req: any, res: any) => {
    try {
        const userId = req.userId;
        const { title, link, tags} = req.body;
        if(!title || !link || !tags) {
            return res.status(400).json({
                message: "All fields are required to create a content",
                success: false
            })
        }
        const newContent = await contentModel.create({
            title: title,
            link: link,
            tags: [],
            userId: userId
        })
        return res.status(200).json({
            message: "content created successfully",
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: "Error in create content",
            //error: error.message
        })
    }
}

export const getContent = async (req: any, res: any) => {
    try {
        const userId = req.userId;
        const contents = await contentModel.find({
            userId: userId
        }).populate("userId", "username");

        if(!contents) {
            return res.status(400).json({
                message: "no any contents currently",
                success: false
            })
        }
        return res.status(200).json({
            contents
        })
    } catch (error) {
        res.status(500).json({
            message: "Error in get content",
            //error: error.message
        })
    }
}

export const deleteContent = async (req: any, res: any) => {
    try {
        const userId = req.userId;
        const contentId = req.body;
        await contentModel.deleteMany({
            contentId,
            userId: userId
        })
        return res.status(200).json({
            message: "Content deleted successfully",
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: "Error in delete content",
            //error: error.message
        })
    }
}

export const linkShare = async (req: any, res: any) => {
    const { share } = req.body;
    if(share) {
        await linkModel.create({
            userId: req.userId,
            hash: random(10)
        })
    } else {
        await linkModel.deleteOne({
            userId: req.userId
        })
    }

    res.status(200).json({
        message: "Updated sharable link"
    })
}

export const linkShareId = async (req: any, res: any) => {
    const { hash } = req.params;

    const link = await linkModel.findOne({
        hash: hash
    })

    if(!link) {
        return res.status(411).json({
            message: "Sorry Incorrect input"
        })
    }
    const content = await contentModel.findOne({
        userId: link.userId
    })

    const user = await userModel.findOne({
        _id: link.userId
    })
    if (!user) {
        res.status(411).json({
            message: "user not found, error should ideally not happen"
        })
        return;
    }
    return res.status(200).json({
        username: user.username,
        content: content
    })
}