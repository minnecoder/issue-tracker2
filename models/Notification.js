const mongoose = require("mongoose")

const NotificationsSchema = new mongoose.Schema({
    project: { type: String },
    ticket: { type: String },
    message: { type: String },
    user: { type: String },
    viewed: { type: String },
})
module.exports = mongoose.model("Notifications", NotificationsSchema)