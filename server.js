const path = require("path")
const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const connectDB = require("./config/db")

const app = express()

dotenv.config({ path: "./config/config.env" })
app.use(bodyParser.json())
app.use(express.json())

//Database Connection
connectDB()

// Enable CORS
app.use(cors())

// Routes
const projects = require("./routes/projects")
const tickets = require("./routes/tickets")
const users = require("./routes/users")
const ticketComment = require("./routes/ticketComment")
const ticketHistory = require("./routes/ticketHistory")
const dashboard = require("./routes/dashboard")

app.use("/api/v1/projects", projects)
app.use("/api/v1/tickets", tickets)
app.use("/api/v1/users", users)
app.use("/api/v1/ticketcomment", ticketComment)
app.use("/api/v1/tickethistory", ticketHistory)
app.use("/api/v1/dashboard", dashboard)


const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))