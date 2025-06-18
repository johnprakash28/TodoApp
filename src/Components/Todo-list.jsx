import React, { useState } from 'react';
import './todo.css'
function Todolist(){

const [tasks,setTasks] = useState([]);
const [newTask,setNewTask] = useState("")

function handleTask(e){
        setNewTask (e.target.value);
}

function addTask(){
if(newTask.trim() !==""){
 setTasks ( t => [...t,newTask])
 setNewTask('')
}
}

function deleteTask(index){

    const updatedTasks = tasks.filter((_,i) => i !== index);
    setTasks(updatedTasks);
}

function moveTaskUp(index){
    if (index > 0){
  const updatedTasks = [...tasks];
  [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]]
   setTasks(updatedTasks);
    }

}

function moveTaskDown(index){
    if(index < tasks.length - 1){
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index+1]] = [[updatedTasks[index+1]],updatedTasks[index]];
        setTasks(updatedTasks);
    }
}
    return(
        <div className='To-do-list'>
         <div>
            <h1>Todo List App</h1>
            <input
             type = "text"
             placeholder='Please add task...'
             value={newTask} onChange={handleTask}
            />
            <button className='Add-Button'
             onClick={addTask}>
                 ADD
            </button>
        </div>
            <ol>
                {tasks.map((task,index) => 
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='Delete-button' onClick={() => deleteTask(index)}>Delete</button>
                    <button className='Move-button' onClick={() => moveTaskUp(index)}>Up</button>
                    <button className='Move-button' onClick={() => moveTaskDown(index)}>Down</button>
                </li>
            )}
            </ol>
        </div>
    );
}

export default Todolist;