import React from 'react';

const Task = ({ task, onDelete }) => {
  return (
    <li className="task">
      <span>{task.name}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
};

export default Task;
