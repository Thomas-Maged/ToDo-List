const express = require('express')
const app = express()
const config = require('./config')
const connectDb = require('./dbConnection')
const taskRouter = require('./Task/taskRouter')
const cors = require('cors')

connectDb()

app.use(express.json())


app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"]
}))

app.use('/tasks', taskRouter)

app.use((req, res, next)=>{
    res.status(400).send("Resource not found")
})

app.listen(config.PORT, ()=>{
    console.log(`Listening on port ${config.PORT}`);
})