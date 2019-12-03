import React from 'react';

const ToDo = props => {
    return (
        <>
            <p>{props.task}</p>
            <p>{props.completed ? 'true' : 'false'}</p>
        </>
    )
};

export default ToDo;