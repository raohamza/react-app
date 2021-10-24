import {Card, Button, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

function BulkDelete() {
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
        tasks = tasks.map(task => {
            return {...task, checked: false}
        })
        console.log(tasks)
        setTasks(tasks)
    }
    const handleChecked = (task) => {
        console.log(task)
        task.checked = !task.checked
    }

    const deleteCheckedTasks = () => {
        console.log('deleting')
        console.log(tasks)
        if (tasks.length <= 0) {
            alert('There is no task to delete!')
            return
        }

        const toBeDelete = tasks.filter(task => task.checked)
        if (toBeDelete.length <= 0) {
            alert('Please check task to delete!')
            return
        }
        const filteredTasks = tasks.filter(task => !task.checked)
        localStorage.setItem('tasks', JSON.stringify(filteredTasks))
        setTasks(filteredTasks);
    }

    return (
      <div>
        <h1>Bulk Delete</h1>
        <Link to="/list-tasks">
            <Button variant="primary">Tasks List</Button>
        </Link>
        <form className="list">
        <Button variant="danger" onClick={deleteCheckedTasks}>Delete Selected Tasks</Button>
        {tasks.map(task => (
            <div className="row" className="list" key={task.id}>
                <div className="col-md-6"></div>
                <div className="col-md-6 offset-md-3">
                    <Card >
                        <Card.Body>
                        {task.name}
                        {task.checked}
                        <input onChange={() => {
                            setTasks(tasks.map(t => {
                                if (t.id === task.id) {
                                    t.checked = !t.checked
                                }
                                return t
                            }))
                        }} type="checkbox" className="checkBox" checked={task.checked}  />
                        </Card.Body>
                    </Card>
                </div>
            </div>
        ))}
        </form>

      </div>
    );
  }
  
export default BulkDelete;