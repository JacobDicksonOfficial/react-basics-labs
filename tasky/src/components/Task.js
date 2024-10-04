import React from 'react';

const Task = (props) => {
    // Dynamically assign class based on priority level
    const priorityClass = `priority-${props.priority.toLowerCase()}`;

    return (
        <div className="card">
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            {props.description && <p>{props.description}</p>}
            {/* Apply the priority class */}
            <p className={priorityClass}>{props.priority}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    );
}

export default Task;

