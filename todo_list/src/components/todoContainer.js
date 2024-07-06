import Task from "./todoTask"
import "./todoContainer.css"
import Stack from 'react-bootstrap/Stack';
import { FaRegEdit } from "react-icons/fa";
import { MdDownloadDone } from "react-icons/md";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import EditTaskModal from './editTask';
import React, { useState } from 'react';
import NavBar from "./navBar";
import tasksData from "../tasksData"
import axios from 'axios';
import { json } from "react-router-dom";


function TodoContainer() {

    const [tasks, setTasks] = useState(tasksData === null ? [] : tasksData.filter(task=>{return task.completed === false}))
    const [doneTasks, setDoneTasks] = useState([])
    const [modalShow, setModalShow] = React.useState(false);
    const [currentTask, setcurrentTask] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [newTask, setNewTask] = useState("")

    const handleEditClick = (taskText, index) => {
        setcurrentTask(taskText)
        setCurrentIndex(index)
        setModalShow(true)
    }

    const editTask = (task) => {
        const updatedTasks = [...tasks]
        updatedTasks[currentIndex].taskText = task
        setTasks(updatedTasks)

        try {
            console.log(tasks[currentIndex]._id);
            const newData = {
                newTaskText: task,
                newTaskState: tasks[currentIndex].completed
            }
            const response = axios.put("http://localhost:8000/tasks/updtateTask/?taskID="+tasks[currentIndex]._id,newData )
        } catch (error) {
            console.error('There was an error!', error);
        }
    }

    const handleAddTaskChange = (newTask)=>{
        setNewTask(newTask)
    }

    const handleAddClick = async ()=>{
        if (newTask !== "") {
            const updtaedTasks = [...tasks]
            updtaedTasks.push({taskText: newTask})
            setTasks(updtaedTasks)
            setNewTask("") 

            try {
                const task = {
                    "taskText": newTask,
                    "completed": false
                }
                console.log("tasl", task);
                const response = await axios.post("http://localhost:8000/tasks/addTask", task)
            } catch (error) {
                console.error('There was an error!', error);
            }
        }
    }

    const handleDoneTask = (index)=>{
        const updatedTasks = [...tasks]
        updatedTasks[index].done = true
        updatedTasks.splice(index, 1)
        setTasks(updatedTasks)

        try {
            console.log(tasks[currentIndex]._id);
            const newData = {
                newTaskText: tasks[index].taskText,
                newTaskState: true
            }
            const response = axios.put("http://localhost:8000/tasks/updtateTask/?taskID="+tasks[currentIndex]._id,newData )
        } catch (error) {
            console.error('There was an error!', error);
        }
    }
    return <>
        <NavBar />
        <div className="todoContainer">
            <h1>TODO LIST</h1>
            <Stack>
                <Form.Control onChange={e=> {handleAddTaskChange(e.target.value)}} value={newTask} className="me-auto" placeholder="Add your Task here..." />
                <Button onClick={handleAddClick} variant="secondary">Add</Button>
                {tasks.map((task, index) => (
                    <div key={index} style={{ display: "inline-block" }}>

                        <Task task={task.taskText} style={{ display: "inline-block" }}>
                        </Task>
                        <button onClick={() => handleEditClick(task.taskText, index)} style={{ background: "none", border: "none", cursor: "pointer" }}> <FaRegEdit style={{ color: "whitesmoke" }} size={32} /></button>
                        <button onClick={()=>{handleDoneTask(index)}} style={{ background: "none", border: "none", cursor: "pointer" }}><MdDownloadDone style={{ color: "whitesmoke" }} size={32} /></button>
                        <EditTaskModal task={currentTask}
                            key={index}
                            editTask={editTask}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>

                ))}

            </Stack>

        </div>
    </>
}

export default TodoContainer