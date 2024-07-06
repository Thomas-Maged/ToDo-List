const taskServices = require('./taskServices')

const gellAllTask = (done)=>{
    taskServices.gellAllTask(done)
}

const addTask = (data, done)=>{
    taskServices.addTask(data, done)
}

const updateTask = (taskID, newTaskText, newTaskState, done)=>{
    taskServices.updateTask(taskID, newTaskText, newTaskState, done)
}
module.exports = {gellAllTask, addTask, updateTask}