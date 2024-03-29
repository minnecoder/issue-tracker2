import express from 'express'

const {
    getDashboardInfo
} = require("../controllers/dashboard")

const router = express.Router()

router
    .route("/")
    .get(getDashboardInfo)

module.exports = router