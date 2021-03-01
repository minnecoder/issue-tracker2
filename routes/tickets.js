const express = require("express")

const {
    getTickets,
    getSingleTicket,
    addTicket,
    updateTicket,
    deleteTicket
} = require("../controllers/tickets")

const router = express.Router()

router
    .route("/")
    .get(getTickets)
    .post(addTicket)

router
    .route("/:id")
    .get(getSingleTicket)
    .put(updateTicket)
    .delete(deleteTicket)

module.exports = router;