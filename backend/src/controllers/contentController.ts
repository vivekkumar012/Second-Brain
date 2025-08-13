import { contentModel, userModel } from "../models/db.js";

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

}

export const linkShareId = async (req: any, res: any) => {

}