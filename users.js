const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('./routes/User');
const Course = require('./routes/Course');
const { authenticateUser } = require('./middleware');

const SECRET = process.env.JWT_SECRET; // You can move this to .env later


let users = [];
let courses = [];
let purchasedCourses = {}; // { username: [courseIds] }

router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username } );

  if (existingUser) {
    return res.status(400).send('User already exists');
  }

  const newUser = new User({ username, password });
  await newUser.save();

  res.send('Signup successful');
});

router.get('/purchased-courses', authenticateUser, async (req, res) => {
 try{
    const username = req.user.username;
    const user = await User.findOne({ username }).populate('purchasedCourses');
    if (!user) return res.status(404).send('User not found');
    res.json(user.purchasedCourses);  
 }
  catch (error) {
      console.error("Error fetching purchased courses:", error);
      res.status(500).send('Internal Server Error');
  }
});


router.post('/login',async  (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });

  if (!user) {
    return res.status(403).send('Invalid credentials');
  }

  const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
  res.json({ token });
});


router.get('/courses', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

router.post('/purchase/:courseId', authenticateUser, async (req, res) => {
  try {
    const courseId = req.params.courseId;

    const user = await User.findOne({ username: req.user.username });
    if (!user) return res.status(403).send('User not found');

   
    if (!mongoose.Types.ObjectId.isValid({id: courseId})) {
      return res.status(400).send('Invalid course ID');
    }

    const course = await Course.findById({id:courseId});
    if (!course) return res.status(404).send('Course not found');


    const alreadyPurchased = user.purchasedCourses.some(purchasedId =>
      purchasedId.toString() === courseId
    );

    if (!alreadyPurchased) {
      user.purchasedCourses.push(course._id);
      await user.save();
    }

    res.send(' Course purchased successfully');
  } catch (err) {
    console.error(' Error purchasing course:', err);
    res.status(500).send('Internal server error');
  }
});


router.get('/purchased-courses', authenticateUser, async (req, res) => {
  const user = await User.findOne({ username: req.user.username }).populate('purchasedCourses');
  res.json(user.purchasedCourses);
});
function setCourses(courseRef) {
  courses = courseRef;
}
module.exports = router;
module.exports.setCourses = setCourses;
