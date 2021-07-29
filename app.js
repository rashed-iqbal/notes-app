require('dotenv').config()
const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors')

const app = express();

const middleware = [
    express.json(),
    cors({credentials:true})
]
app.use(middleware)

//? Routes
app.use("/api/auth",require('./routes/auth'))
app.use("/api/note",require('./routes/note'))

connectDB(()=>{
    app.listen(process.env.PORT,console.log("Server is running..."))
})
