// const express = require("express");
// const { userRouter} = require("./routes/user")
// const { adminrRouter} = require("./routes/admin")
// const { adminRouter} = require("./routes/admin")
// const app = express();

// app.use("/user",userRouter);

// app.listen(3000);




require("dotenv").config();

console.log("DB CONNECTED");
const { userRouter} = require("./routes/user");
const {courseRouter}= require("./routes/course");
const {adminRouter}= require("./routes/admin")

const express = require("express");
const app= express();
const mongoose = require("mongoose");


app.use(express.json());

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/course", courseRoutes);


async fuction main(){
    await mongoose.connect(process.env.MONGO_URL);

    app.listen(3000);
    console.log("BE RUNNING DB")
}

main();
