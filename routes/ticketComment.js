const express = require("express")

const {
    getTicketComments,
    getSingleTicketComment,
    addTicketComment,
    updateTicketComment,
    deleteTicketComment
} = require("../controllers/ticketComment")
const { addTicketCommentToTicket } = require("../controllers/tickets")
const router = express.Router()

router
    .route("/")
    .get(getTicketComments)
    .put(addTicketCommentToTicket)
    .post(addTicketComment)
router
    .route("/:id")
    .get(getSingleTicketComment)
    .put(updateTicketComment)
    .delete(deleteTicketComment)

module.exports = router;