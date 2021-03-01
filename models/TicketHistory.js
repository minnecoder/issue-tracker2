mongoose = require("mongoose")

const TicketHistorySchema = new mongoose.Schema({
    user: String,
    propertyChanged: String,
    oldValue: String,
    newValue: String,
    created: {
        type: Date,
        default: Date.now()
    },
    updated: {
        type: Date
    }
})

module.exports = mongoose.model("TicketHistory", TicketHistorySchema)