import React, { useState } from "react";

function AddTask({ onAddTask }) {
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    if (newTask.trim()) {
      onAddTask(newTask);
      setNewTask("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="input-group mb-3 ">
      <input
        type="text"
        placeholder="Enter new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="form-control"
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleAdd}
        className="btn btn-outline-secondary text-white bg-black"
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
