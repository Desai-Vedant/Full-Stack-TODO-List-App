import { useState } from "react";
import "../styles/Task.css";

function Task({ props, onDelete, onUpdateTask }) {
  var [isDone, setIsDone] = useState(props.iscompleted);
  const strikeThrough = { textDecoration: "line-through" };

  const handleUpdate = () => {
    setIsDone(isDone ? false : true);
    const updatedProps = { ...props, iscompleted: !props.iscompleted };
    onUpdateTask(updatedProps);
  };

  return (
    <div className="taskTile">
      <div>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          checked={isDone}
          id="flexCheckDefault"
          onChange={handleUpdate}
        />
        <label
          className="form-check-label"
          style={isDone ? strikeThrough : null}
        >
          {props.title}
        </label>
      </div>
      <div className="delete-button-div">
        <button onClick={onDelete}>
          <img
            className="icon-button"
            src="./src/assets/icons-delete.svg"
            alt=""
            width="38"
            height="38"
          />
        </button>
      </div>
    </div>
  );
}

export default Task;
