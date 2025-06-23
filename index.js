require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./users');
const { courses } = require('./courses');
const Course = require('./routes/Course')
const { adminRouter, course } = require('./admin');


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log(' MongoDB connected'))
.catch(err => console.error(' MongoDB error:', err));

app.use(express.json());
app.get('/courses', (req, res) => {
  res.json(courses);
});

require('./users').setCourses(courses);

app.use('/', userRoutes);
app.use('/', adminRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
