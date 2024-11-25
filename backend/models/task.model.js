import mongoose from "mongoose";

const TaskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    iscompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", TaskSchema);

export default Task;
