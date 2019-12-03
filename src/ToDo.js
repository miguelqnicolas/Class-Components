import React from 'react';
import './ToDo.css';

const ToDo = props => {
    const clickHandler = () => {
        props.toggleCompleted(props.item.id)
    };
    
    return (
        <>
            <p onClick={clickHandler} className={props.item.completed ? 'completed' : ''}>{props.item.task}</p>
        </>
    )
};

export default ToDo;