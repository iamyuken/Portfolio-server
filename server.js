require('dotenv').config()
const express = require('express')
const app = express()
const dbcon = require('./config/db')
app.use(express.json())
const Projects = require("./routes/projectRoute")
const cors = require('cors')

app.use(cors())

const port = process.env.PORT || 7770
app.use('/projects',Projects)

app.get('/',(req,res) => {
    res.json({message:"Welcome"})
})
app.get('/hello',(req,res) => {
    res.json({message:"Welcome Hello"})
})

app.listen(port,() => {
    console.log(`Server running on port : ${port}`);
})