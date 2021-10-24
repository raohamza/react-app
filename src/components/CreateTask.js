import React from 'react'
// import {useForm} from 'react-hook-form'
import { Redirect } from "react-router-dom";

class CreateTask extends React.Component{
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm();

    constructor(props) {
        super(props);
        this.state = {value: '', redirect: false};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.value)
        if (!this.state.value) {
            return alert('Enter a valid name');
        }

        let tasks = []
        if (localStorage.getItem('tasks')) {
            tasks = JSON.parse(localStorage.getItem('tasks'))
        }
        tasks.push({
            name: this.state.value,
            id: Date.now().toString()
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
        this.setState({value: '', redirect: true});
    }

    render() { 
        if (this.state.redirect) {
            return <Redirect to="/list-tasks" />
        }
        return (
            <div className="App">
                <h1>Create New Task</h1>
                <form  onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Task Name"  value={this.state.value} onChange={this.handleChange} />
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
  }
  
  export default CreateTask;