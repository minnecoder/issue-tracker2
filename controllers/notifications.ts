import { Request, Response } from "express"
const NotificationsSchema = require("../models/Notification")

// @desc Get all notifications
// @route GET /notifications
// @access Public
exports.getNotifications = async (req: Request, res: Response) => {
    try {
        const notifications = await NotificationsSchema.find()
        return res.status(200).json({
            success: true,
            count: notifications.length,
            data: notifications
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: "Server Error" })
    }
}

// @desc Get single notification
// @route GET /notifications/:id
// @access Public
exports.getSingleNotification = async (req: Request, res: Response) => {
    try {
        const notification = await NotificationsSchema.findOne({ _id: req.params.id })

        return res.status(200).json({
            success: true,
            data: notification
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: "Server Error" })
    }
}

// @desc Add notification
// @route POST /notifications
// @access Public
exports.addNotification = async (req: Request, res: Response) => {
    try {
        const notification = await NotificationsSchema.create(req.body)

        return res.status(200).json({
            success: true,
            data: notification
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: "Server Error" })
    }
}

// @desc Update notification
// @route PUT /notifications/:id
// @access
exports.updateNotification = async (req: Request, res: Response) => {
    try {
        const notification = await NotificationsSchema.findById(req.params.id).exec();
        notification.set(req.body);
        await notification.save();
        return res.status(200).json({
            success: true,
            data: notification,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" });
    }
};

// @desc Delete notification
// @route DELETE /notifications/:id
// @access
exports.deleteNotification = async (req: Request, res: Response) => {
    try {
        const notification = await NotificationsSchema.findById(req.params.id);

        if (!notification) {
            return res.status(404).json({
                success: false,
                error: "No notification found",
            });
        }
        await notification.remove();

        return res.status(200).json({
            success: true,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" });
    }
};