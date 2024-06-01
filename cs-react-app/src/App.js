import react, {useState} from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import {tasks} from "./data";

import { greeting, user } from "./data";

function App() {
  const [myTasks, setMyTasks] = useState(tasks);

  const handleFormSubmit = (e)=> {
    e.preventDefault();
    const newTask = {
      id: myTasks.length = 1,
      title: e.target.taskName.value,
    }
  }

  return (
    <div className="App">
      <h1>
        {greeting} {user}
      </h1>

      <TaskForm />
      <TaskList tasks={myTasks}/>
    </div>
  );
}

export default App;
