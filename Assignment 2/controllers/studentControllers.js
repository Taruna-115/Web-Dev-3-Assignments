const { students } = require("../data/students");

// GET: Get all students
const getStudents = (req, res) => {
    try {
        res.status(200).send(students);
    } catch (err) {
        console.log(err, "Students cannot be retrieved");
        res.status(500).send(err);
    }
};


// GET: Get student by ID
const getStudentById = (req, res) => {
    let { id } = req.params;

    const student = students.find(
        student => student.id === Number(id)
    );

    if (!student) {
        return res.status(404).send("Student Not Found");
    }

    res.status(200).send(student);
};


// POST: Create a new student
const createStudent = (req, res) => {
    let { name, age, course } = req.body;

    if (!name || !age || !course) {
        return res.status(400).send("Please provide name, age and course");
    }

    let newStudent = {
        id: students.length + 1,
        name: name,
        age: age,
        course: course
    };

    students.push(newStudent);

    res.status(201).send("Student created successfully");
};


// PUT: Update student
const updateStudent = (req, res) => {
    let { id } = req.params;

    const student = students.find(
        student => student.id === Number(id)
    );

    if (!student) {
        return res.status(404).send("Student Not Found");
    }

    Object.assign(student, req.body);

    res.status(200).send("Student Updated Successfully");
};


// DELETE: Delete student
const deleteStudent = (req, res) => {
    let { id } = req.params;

    const student = students.find(
        student => student.id === Number(id)
    );

    if (!student) {
        return res.status(404).send("Student Not Found");
    }

    let index = students.indexOf(student);

    students.splice(index, 1);

    res.status(200).send("Student Deleted Successfully");
};


module.exports = {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};