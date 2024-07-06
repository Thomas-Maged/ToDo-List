const express = require('express')
const router = express.Router()
const taskController = require('./taskController')

router.get('/getAllTasks', (req, res)=>{
    taskController.gellAllTask((err, data)=>{
        if (err) {
            res.send({ status: false, data: null, message: err })
        }else{
            console.log(data);
            res.send({ status: true, data: data, message: "Tasks retrieved successfully" })
        }
    })

})

router.post('/addTask', (req, res) => {

    try {
        taskController.addTask(req.body, (err, data) => {

            if (err) {
                return res.send({ status: false, message: err, data: null })
            }
            return res.send({ status: true, message: "Task added successfully", data: data })
        })
    } catch (error) {
        return res.send({ status: false, message: "Error has occured, please try again after some time", data: null })

    }
})

router.put('/updtateTask', (req, res)=>{
    console.log(req.body.newTaskState);
    const taskID = req.query.taskID
    try {
        taskController.updateTask(taskID, req.body.newTaskText, req.body.newTaskState, (err, data)=>{
            if (err) {
                return res.send({ status: false, message: err, data: null })
            }
            return res.send({ status: true, message: "Task updtaed successfully", data: data })
        })
    } catch (error) {
        return res.send({ status: false, message: "Error has occured, please try again after some time", data: null })
    }
})

module.exports =  router