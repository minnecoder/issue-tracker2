const Project = require("../models/Project")

// @ desc Get all projects
// @route GET /projects
// @access Public
exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find()
            .populate({
                path: "tickets",
                populate: {
                    path: "ticketComment ticketHistory",

                }
            })
            .exec()

        res.status(200).json({
            success: true,
            count: projects.length,
            data: projects
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: "Server Error" })
    }
}

// @ desc Get all projects
// @route GET /projects
// @access Public
exports.getSingleProject = async (req, res) => {
    try {
        const project = await Project.findById({ id: req.params.addTicketId })
            .populate("tickets")
            .exec()

        res.status(200).json({
            success: true,
            data: project
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: "Server Error" })
    }
}



// @desc  Add project
// @route POST /projects
// @access Public
exports.addProject = async (req, res) => {
    try {
        const project = await Project.create(req.body);

        return res.status(200).json({
            success: true,
            data: project,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" });
    }
};

// @desc Update project
// @route PUT /projects/:id
// @access
exports.updateProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id).exec();
        project.set(req.body);
        await project.save();
        return res.status(200).json({
            success: true,
            data: project,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" });
    }
};

// @desc Delete project
// @route DELETE /projects/:id
// @access
exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({
                success: false,
                error: "No project found",
            });
        }
        await project.remove();

        return res.status(200).json({
            success: true,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" });
    }
};

// @desc Add ticket id to project
// @route PUT /projects
// @access
exports.addTicketId = async (req, res) => {
    try {
        const project = await Project.findById(req.body.id)
        if (!project) {
            return res.status(404).json({
                success: false,
                error: "Project not found"
            })
        }

        project.tickets.push(req.body._id)
        await project.save()
        return res.status(200).json({
            success: true,
            data: project
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: "Server Error" })
    }
}

exports.getProjectsDropDown = async (req, res) => {
    try {
        const projects = await Project.find().select("title")


        res.status(200).json({
            success: true,
            count: projects.length,
            data: projects
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: "Server Error" })
    }
}