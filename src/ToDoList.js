import React from 'react';
import ToDo from './ToDo';

const ToDoList = props => (
    <>
        {props.state.map(item => (
            <button key={item.id}> <ToDo task={item.task} completed={item.completed}/> </button>
        ))}
    </>
)

export default ToDoList;