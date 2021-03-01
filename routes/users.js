const express = require("express")

const {
    addUser,
    loginUser
} = require("../controllers/users")

const router = express.Router()

router
    .route("/login")
    .post(loginUser)

router
    .route("/add")
    .post(addUser)

module.exports = router;