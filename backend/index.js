import express from "express";
import mongoose from "mongoose";
import Task from "./models/task.model.js";
import cors from "cors";
import dotenv from "dotenv";

// Constants
const app = express();
const port = 5000;

// Config
dotenv.config();

// get Acess URL
const API_URL = process.env.API_URL;

// Allow React Request
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add a task
app.post("/api/task", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a task
app.delete("/api/task/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({ message: "Task Not Found" });
    }

    res.status(200).json({ message: "Task Deleted Sucessfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Edit a task
app.put("/api/task/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body);

    if (!task) {
      res.status(404).json({ message: "Task Not Found" });
    }

    const updatedTask = await Task.findById(id);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all the tasks
app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Connect to database and start app
mongoose.connect(API_URL).then(() => {
  console.log("Connected");
  app.listen(port, () => {
    console.log(`Connected to Server on port ${port}`);
  });
});
