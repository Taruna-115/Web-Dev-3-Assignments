const express = require("express");

const {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/studentControllers");

const router = express.Router();


// GET all students
router.get("/students", getStudents);


// GET student by ID
router.get("/students/:id", getStudentById);


// POST new student
router.post("/students", createStudent);


// PUT update student
router.put("/students/:id", updateStudent);


// DELETE student
router.delete("/students/:id", deleteStudent);


module.exports = router;

