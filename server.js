const express = require("express")
const path = require("path")
const mongoose = require("mongoose")

//Step 1
const multer = require('multer')

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, "public")))

//Step 2
app.use('/upload', express.static(path.join(__dirname, "upload")))

//Step 3

app.set("view engine", "ejs")
app.set("views", "views")

// Access Route
const studentRouter = require('./route/studentRouter');
const apiRouter = require('./route/apiRouter');
app.use(studentRouter);
app.use("/api/", apiRouter);

const dbDriver = "mongodb+srv://abhishek:rKbKhmexljtap0Rh@cluster0.jwma6.mongodb.net/dbStudent"

const port = process.env.PORT || 5000

mongoose.connect(dbDriver, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((result) => {
    app.listen(port, () => {
        console.log(`DB Is Connected @ http://localhost:${port}`);
        console.log(`Server Is Connected!!!`);
    })
}).catch((error) => {
    console.log(`Something Went Wrong!!!`);
})