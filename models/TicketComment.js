const mongoose = require("mongoose")

const TicketCommentSchema = new mongoose.Schema({
    user: String,
    comment: String,
    created: {
        type: Date,
        default: Date.now()
    },
    updated: {
        type: Date
    }
})

module.exports = mongoose.model("TicketComment", TicketCommentSchema)