import React from "react";



function TaskList(props) {
  return (
    <div>
      {props.tasks.map((task) => (
        <ul>
          <li>Task: {task.title}</li>
          <li>Status: {task.status}</li>
        </ul>
      ))}
    </div>
  );
}

export default TaskList;
