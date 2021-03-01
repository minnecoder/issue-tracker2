const express = require("express")

const {
    getTicketHistorys,
    getSingleTicketHistory,
    addTicketHistory,
    updateTicketHistory,
    deleteTicketHistory,
    addTicketId
} = require("../controllers/ticketHistory")
const { addTicketHistoryToTicket } = require("../controllers/tickets")
const router = express.Router()

router
    .route("/")
    .get(getTicketHistorys)
    .put(addTicketHistoryToTicket)
    .post(addTicketHistory)
router
    .route("/:id")
    .get(getSingleTicketHistory)
    .put(updateTicketHistory)
    .delete(deleteTicketHistory)

module.exports = router;