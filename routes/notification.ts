import express from 'express'

const {
    getNotifications,
    getSingleNotification,
    addNotification,
    updateNotification,
    deleteNotification
} = require("../controllers/notifications")

const router = express.Router()

router
    .route("/")
    .get(getNotifications)
    .post(addNotification)
router
    .route("/:id")
    .get(getSingleNotification)
    .put(updateNotification)
    .delete(deleteNotification)

module.exports = router