import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import axios from 'axios';



function EditTaskModal(props) {
    const [currentTask, setCurrentTask] = useState(props.task)
    const handleChange = (e)=>{
        setCurrentTask(e.target.value)
    }

    useEffect(() => {
        setCurrentTask(props.task);
    }, [props.task]);

    const handleSave = () => {
        if (currentTask !== "") {
            props.editTask(currentTask)
        }
        props.onHide();
    }



    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Task
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control className="me-auto" placeholder="Add your Task here..." value={currentTask} onChange={handleChange}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default EditTaskModal