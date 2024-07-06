const taskDAO = require('./taskDAO')

const gellAllTask = (done)=>{
    taskDAO.gellAllTask(done)
}

const addTask = (data, done)=>{
    taskDAO.addTask(data, done)
}

const updateTask = (taskID, newTaskText, newTaskState, done)=>{
    taskDAO.updateTask(taskID, newTaskText, newTaskState, done)
}

module.exports = {gellAllTask, addTask, updateTask}