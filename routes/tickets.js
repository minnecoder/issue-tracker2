const express = require("express")

const {
    getTickets,
    getSingleTicket,
    addTicket,
    updateTicket,
    deleteTicket,
    getTicketsAssignedDev
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

router
    .route("/:name")
    .get(getTicketsAssignedDev)

module.exports = router;