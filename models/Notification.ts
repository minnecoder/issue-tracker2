import mongoose from 'mongoose'

const NotificationsSchema = new mongoose.Schema({
    project: { type: String },
    ticket: { type: String },
    message: { type: String },
    user: { type: String },
    viewed: {
        type: Boolean,
        default: false
    },
})
module.exports = mongoose.model("Notifications", NotificationsSchema)