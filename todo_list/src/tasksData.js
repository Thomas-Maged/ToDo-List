import axios from "axios"

let tasks = []

const fetchTaks = async ()=>{
    try {
        const response = await axios.get("http://localhost:8000/tasks/getAllTasks")
        tasks = response.data.data
    } catch (error) {
        console.error("There was an error")
    }
}   

await fetchTaks()

export default tasks