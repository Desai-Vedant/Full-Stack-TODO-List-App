import "./App.css";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching todos :", error);
      });
  });

  const addTask = (newTask) => {
    const taskData = { title: newTask, iscompleted: false };
    axios.post("http://localhost:5000/api/task", taskData).catch((error) => {
      console.error("Error adding task : ", error);
    });
  };

  const deleteTask = (removeId) => {
    axios
      .delete(`http://localhost:5000/api/task/${removeId}`)
      .catch((error) => {
        console.error("Error while deleting task : ", error);
      });
  };

  const updateTask = (updatedData) => {
    axios
      .put(`http://localhost:5000/api/task/${updatedData._id}`, updatedData)
      .catch((error) => {
        console.error("Error while Updating task : ", error);
      });
  };

  return (
    <div className="todo-app">
      <NavBar></NavBar>
      <div className="taskContainer">
        {tasks.map((data) => (
          <Task
            props={data}
            onDelete={() => {
              deleteTask(data._id);
            }}
            onUpdateTask={updateTask}
            key={data._id}
          ></Task>
        ))}
      </div>
      <AddTask onAddTask={addTask}></AddTask>
    </div>
  );
}

export default App;
