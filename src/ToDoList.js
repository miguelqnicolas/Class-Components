import React from 'react';
import ToDo from './ToDo';

const ToDoList = props => (
    <>
        {props.state.map(item => (
            <ToDo toggleCompleted={props.toggleCompleted} key={item.id} item={item}/>
        ))}
    </>
)

export default ToDoList;