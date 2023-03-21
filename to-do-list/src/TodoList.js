import React, { useState } from 'react';

function TodoList() {
  const [todoList, setTodoList] = useState([]);

  const handleTaskCompletion = (index, completed) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index].completed = completed;
    setTodoList(updatedTodoList);
  };

  const filteredTodoList = todoList.filter(task => !task.completed);

  return (
    <div>
      <ul>
        {filteredTodoList.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={(event) =>
                handleTaskCompletion(index, event.target.checked)
              }
            />
            {task.task}
            <button type='Complete' className='todo-btn'>
            Completed
         </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

