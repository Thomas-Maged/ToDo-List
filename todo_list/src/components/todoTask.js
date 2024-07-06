// import Form from 'react-bootstrap/Form';



function Task(props) {
 
    return <div className="p-2"  style={{borderRadius:10, backgroundColor:"orangered", width:"500px", display: "inline-block", margin: "5px"}}>{props.task}</div>   
}

export default Task