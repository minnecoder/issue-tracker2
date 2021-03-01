const TicketHistory = require("../models/TicketHistory")

// @ desc Get all ticketHistorys
// @route GET /ticketHistorys
// @access Public
exports.getTicketHistorys = async (req, res) => {
    try {
        const ticketHistorys = await TicketHistory.find()

        res.status(200).json({
            success: true,
            count: ticketHistorys.length,
            data: ticketHistorys
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: "Server Error" })
    }
}

// @ desc Get all ticketHistorys
// @route GET /ticketHistorys
// @access Public
exports.getSingleTicketHistory = async (req, res) => {
    try {
        const ticketHistory = await TicketHistory.findById({ id: req.params.addTicketId })

        res.status(200).json({
            success: true,
            data: ticketHistory
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: "Server Error" })
    }
}



// @desc  Add ticketHistory
// @route POST /ticketHistorys
// @access Public
exports.addTicketHistory = async (req, res) => {
    try {
        const ticketHistory = await TicketHistory.create(req.body);

        return res.status(200).json({
            success: true,
            data: ticketHistory,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" });
    }
};

// @desc Update ticketHistory
// @route PUT /ticketHistorys/:id
// @access
exports.updateTicketHistory = async (req, res) => {
    try {
        const ticketHistory = await TicketHistory.findById(req.params.id).exec();
        ticketHistory.set(req.body);
        await ticketHistory.save();
        return res.status(200).json({
            success: true,
            data: ticketHistory,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" });
    }
};

// @desc Delete ticketHistory
// @route DELETE /ticketHistorys/:id
// @access
exports.deleteTicketHistory = async (req, res) => {
    try {
        const ticketHistory = await TicketHistory.findById(req.params.id);

        if (!ticketHistory) {
            return res.status(404).json({
                success: false,
                error: "No ticket history found",
            });
        }
        await ticketHistory.remove();

        return res.status(200).json({
            success: true,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" });
    }
};

// @desc Add ticket id to ticketHistory
// @route PUT /ticketHistorys
// @access
exports.addTicketId = async (req, res) => {
    try {
        const ticketHistory = await TicketHistory.findById(req.body.id)
        if (!ticketHistory) {
            return res.status(404).json({
                success: false,
                error: "Ticket history not found"
            })
        }

        ticketHistory.tickets.push(req.body._id)
        await ticketHistory.save()
        return res.status(200).json({
            success: true,
            data: ticketHistory
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: "Server Error" })
    }
}