import React, { useState } from 'react';
import Task from './Task';
import './TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), name: taskName }]);
      setTaskName('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-list">
      <h2>To-Do List</h2>
      <div className="add-task">
        <input
          type="text"
          value={taskName}
          onChange={handleInputChange}
          placeholder="Enter task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={handleDeleteTask} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
