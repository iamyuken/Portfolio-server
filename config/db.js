const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://server1:Yuke2004@sample.hhczd.mongodb.net/?retryWrites=true&w=majority&appName=Sample")

const connection = mongoose.connection;
connection.on('connected', () =>{
    console.log("DB Connected");
})

connection.on('error',() => console.log("DB Error"));