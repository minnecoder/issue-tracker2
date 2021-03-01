const mongoose = require("mongoose")

const TicketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Ticket title is required"]
    },
    description: {
        type: String,
        required: [true, "Ticket description is required"]
    },
    assignedDev: {
        type: String,
        required: [true, "Assigned developer is required"]
    },
    submitter: {
        type: String,
        required: [true, "Submitter is required"]
    },
    ticketPriority: {
        type: String,
        enum: ["Lowest", "Low", "Medium", "High", "Highest"],
        default: "Lowest"
    },
    ticketStatus: {
        type: String,
        enum: ["Open", "Resolved", "Closed", "Reopened", "In Progress"],
        default: "Open"
    },
    ticketType: {
        type: String,
        enum: ["Bug", "New Feature", "Improvement", "Task", "Testing"],
        required: [true, "Ticket type is required"]
    },
    ticketHistory: [{
        user: String,
        propertyChanged: String,
        property: String,
        oldValue: String,
        newValue: String,
        created: {
            type: Date,
            default: Date.now()
        },
        updated: {
            type: Date
        }
    }],
    ticketComment: [{
        user: String,
        comment: String,
        created: {
            type: Date,
            default: Date.now()
        },
        updated: {
            type: Date
        }
    }],
    createdOn: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Ticket", TicketSchema)