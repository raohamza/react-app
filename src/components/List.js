import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

function List() {
    useEffect (() => {
        getTasks()
    }, [])

    const [tasks, setTasks] = useState([]) 

    const getTasks = () => {
        console.log('called')
        let tasks = []
        if (localStorage.getItem('tasks')) {
            tasks = JSON.parse(localStorage.getItem('tasks'))
        }
        console.log(tasks)
        setTasks(tasks)
    }

    return (
      <div>
        <h1>List</h1>
        <Link to="/bulk-delete">
            <Button variant="danger">Bulk Delete</Button>
        </Link>
        <Link to="/create-task">
            <Button variant="primary">Add New Task</Button>
        </Link>
        {tasks.map(task => (
            <div className="row" className="list" key={task.id}>
                <div className="col-md-6"></div>
                <div className="col-md-6 offset-md-3">
                    <Card >
                        <Card.Body>{task.name}</Card.Body>
                    </Card>
                </div>
            </div>
        ))}

      </div>
    );
  }
  
  export default List;