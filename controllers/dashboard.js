const Project = require("../models/Project")
const Ticket = require("../models/Ticket")

// @desc get Dashboard Info
// @route GET /dashboard
// @access Public
exports.getDashboardInfo = async (req, res) => {
    try {
        const tickets = await Ticket.find()
        const projects = await Project.find().limit(5).sort({ tickets: -1 }).select({ title: 1, tickets: 1 })
        const projectNum = projects.length
        // sort projects by number of tickets in project
        projects.sort((a, b) => {
            return b.tickets.length - a.tickets.length
        })

        // Total number of tickets
        const ticketNum = tickets.length
        // # of tickets priority - High
        const ticketsHigh = tickets.filter(ticket => ticket.ticketPriority == "High")
        // # of tickets priority - Highest
        const ticketsHighest = tickets.filter(ticket => ticket.ticketPriority == "Highest")
        // # of tickets status open
        const ticketsOpen = tickets.filter(ticket => ticket.ticketStatus == "Open")
        // # of tickets in progess
        const ticketsInProgress = tickets.filter(ticket => ticket.ticketStatus == "In Progress")
        // # of tickets type bug
        const ticketsBug = tickets.filter(ticket => ticket.ticketType == "Bug")
        const data = {
            projectNum: projectNum,
            projects: projects,
            ticketNum: ticketNum,
            ticketsHigh: ticketsHigh.length,
            ticketsHighest: ticketsHighest.length,
            ticketsBug: ticketsBug.length,
            ticketsInProgress: ticketsInProgress.length,
            ticketsOpen: ticketsOpen.length,
        }
        res.status(200).json({
            success: true,
            data: data
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: "Server Error"
        })
    }
}