const express = require("express")


const {
    getProjects,
    getProjectsDropDown,
    addProject,
    updateProject,
    deleteProject,
    addTicketId
} = require("../controllers/projects")

const router = express.Router()

router
    .route("/")
    .get(getProjects)
    .post(addProject)
    .put(addTicketId)
router
    .route("/:id")
    .put(updateProject)
    .delete(deleteProject)
router
    .route("/dropdown")
    .get(getProjectsDropDown)

module.exports = router;