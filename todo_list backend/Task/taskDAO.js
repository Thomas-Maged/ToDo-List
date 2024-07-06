const taskModel = require('./taskModel')

const gellAllTask = (done)=>{
    taskModel.find().then(res=>{
        if (res.length === 0) {
            return done("no tasks found", undefined)
        }
        return done(undefined, res)
    }).catch(err=>{
        return done(err, undefined)
    })
}

const addTask = (data, done)=>{
    console.log(data);
    taskModel.create(data).then(res=>{
        return done(undefined, res)
    }).catch(err=>{
        return done(err, undefined)
    })
}

const updateTask = (taskID, newTaskText, newTaskState, done)=>{
    taskModel.updateOne({_id: taskID}, {taskText: newTaskText, completed: newTaskState}).then(res=>{
        return done(undefined, res)
    }).catch(err=>{
        return done(err, undefined)
    })
}

module.exports = {gellAllTask, addTask, updateTask}