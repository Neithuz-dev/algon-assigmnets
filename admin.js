const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Admin = require('./routes/Admin');
const Course = require('./routes/Course');
const { authenticateAdmin } = require('./middleware');

const SECRET = process.env.JWT_SECRET; // Can move to .env

let admins = [];
let courses = [];
 module.exports = {
  adminRouter: router,
  courses
};// Shared with users
let courseIdCounter = 1;


// Use on protected admin routes
router.post('/admin/course', authenticateAdmin, async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title) return res.status(400).send("Title is required");

    const course = new Course({ title, content });
    await course.save();

    res.status(201).json({ message: 'Course created successfully', course });
  } catch (error) {
    console.error(" Error creating course:", error);
    res.status(500).send('Internal Server Error');
  }
});

router.put('/admin/course/:id/content', authenticateAdmin, async (req, res) => {
 try {
    const { content } = req.body;
    const { id } = req.params;

    const course = await Course.findById(id);
    if (!course) return res.status(404).send("Course not found");

    course.content = content;
    await course.save();

    res.json({ message: 'Course content updated', course });
  } catch (error) {
    console.error("Error updating course content:", error);
    res.status(500).send('Internal Server Error');
  }
});

router.delete('/admin/course/:id', authenticateAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    const course = await Course.findByIdAndDelete(id);
    if (!course) return res.status(404).send("Course not found");

    res.json({ message: 'Course deleted', deletedCourse: course });
  } catch (error) {
    console.error(" Error deleting course:", error);
    res.status(500).send('Internal Server Error');
  }
});

// POST /admin/signup
router.post('/admin/signup', async(req, res) => {
  const { username, password } = req.body;
  const exists =  await Admin.findOne({ username });
  if (exists){
     return res.status(400).send('Admin already exists');
}
  const newAdmin = new Admin({ username, password });
  await newAdmin.save();

  admins.push({ username, password });
  res.send('Admin registered successfully');
});

// POST /admin/login
router.post('/admin/login',async (req, res) => {
  const { username, password } = req.body;

  try {
  const admin = await Admin.findOne({username,password});

  if (!admin) 
    {
      return res.status(403).send('Invalid credentials');
    }
  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
  }
catch (error) {
    console.error("Login error:", error);
    res.status(500).send('Internal server error');
  }
});
// POST /admin/course – Create new course
router.post('/admin/course', authenticateAdmin, async (req, res) => {
  const { title } = req.body;
 try{
  const course = new Course({ title });
  await course.save();

  res.json({ message: 'Course created', course });
 }
 catch (error) {
    console.error("Error creating course:", error);
    res.status(500).send('Internal Server Error');
  }
});

// DELETE /admin/course/:id – Delete course
router.delete('/admin/course/:id', authenticateAdmin, (req, res) => {
  const id = req.params.id;
  const index = courses.findIndex(c => c.id === id);
  if (index === -1) return res.status(404).send('Course not found');

  courses.splice(index, 1);
  res.send('Course deleted successfully');
});

// PUT /admin/course/:id/content – Add content to a course
router.put('/admin/course/:id/content', authenticateAdmin, async (req, res) => {
  const { content } = req.body;
  const course = await Course.findById(req.params.id);

  if (!course) return res.status(404).send('Course not found');

  course.content = content;
  await course.save();

  res.send('Course content updated');
});

module.exports = { adminRouter: router, courses };
