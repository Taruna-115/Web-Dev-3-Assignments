//Main server file

const express = require("express");
const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

const app = express();


// Middleware to parse JSON
app.use(express.json());


// Custom logger middleware
app.use(logger);


// Student routes
app.use("/api", studentRoutes);


// Home route
app.get("/", (req, res) => {
    res.status(200).send("Student Management API is running");
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
