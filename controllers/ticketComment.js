const TicketComment = require("../models/TicketComment")

// @ desc Get all ticketComments
// @route GET /ticketComments
// @access Public
exports.getTicketComments = async (req, res) => {
    try {
        const ticketComments = await TicketComment.find()

        res.status(200).json({
            success: true,
            count: ticketComments.length,
            data: ticketComments
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: "Server Error" })
    }
}

// @ desc Get all ticketComments
// @route GET /ticketComments
// @access Public
exports.getSingleTicketComment = async (req, res) => {
    try {
        const ticketComment = await TicketComment.findById({ id: req.params.addTicketId })

        res.status(200).json({
            success: true,
            data: ticketComment
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: "Server Error" })
    }
}



// @desc  Add ticketComment
// @route POST /ticketComments
// @access Public
exports.addTicketComment = async (req, res) => {
    try {
        const ticketComment = await TicketComment.create(req.body);

        return res.status(200).json({
            success: true,
            data: ticketComment,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" });
    }
};

// @desc Update ticketComment
// @route PUT /ticketComments/:id
// @access
exports.updateTicketComment = async (req, res) => {
    try {
        const ticketComment = await TicketComment.findById(req.params.id).exec();
        ticketComment.set(req.body);
        await ticketComment.save();
        return res.status(200).json({
            success: true,
            data: ticketComment,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" });
    }
};

// @desc Delete ticketComment
// @route DELETE /ticketComments/:id
// @access
exports.deleteTicketComment = async (req, res) => {
    try {
        const ticketComment = await TicketComment.findById(req.params.id);

        if (!ticketComment) {
            return res.status(404).json({
                success: false,
                error: "No ticketComment found",
            });
        }
        await ticketComment.remove();

        return res.status(200).json({
            success: true,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" });
    }
};

// @desc Add ticket id to ticketComment
// @route PUT /ticketComments
// @access
exports.addTicketId = async (req, res) => {
    try {
        const ticketComment = await TicketComment.findById(req.body.id)
        if (!ticketComment) {
            return res.status(404).json({
                success: false,
                error: "TicketComment not found"
            })
        }

        ticketComment.tickets.push(req.body._id)
        await ticketComment.save()
        return res.status(200).json({
            success: true,
            data: ticketComment
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: "Server Error" })
    }
}