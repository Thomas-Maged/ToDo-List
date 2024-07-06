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

function CompletedTasks() {
    let tasks = []
    if (tasksData !== null) {
        tasks = tasksData.filter(task=>{
            return task.completed == true
        })   
    }
    
    
    return <>
        <NavBar />
        <div className="todoContainer">
            <h1>COMPLETED TASKS</h1>
            <Stack>
                {tasks.map((task, index) => (
                    <div key={index} style={{ display: "inline-block" }}>

                        <Task task={task.taskText} style={{ display: "inline-block" }}>
                        </Task>
                    </div>

                ))}

            </Stack>

        </div>
    </>
}

export default CompletedTasks