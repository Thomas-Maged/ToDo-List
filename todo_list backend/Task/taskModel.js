const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    taskText: {type: String},
    completed: {type: Boolean}
})

const taskModel = mongoose.model("Tasks", taskSchema)

module.exports = taskModel;