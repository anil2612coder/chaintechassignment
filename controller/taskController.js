import Task from "../models/task.js";



// create single task
export const createTask = async (req, res) => {
    try {
      const { title, description } = req.body;
  
      if (!title) {
        return res.status(400).json({ error: 'Title is required' });
      }
  
      const newTask = new Task({ title, description});
      await newTask.save();
      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ error: 'Server Error' });
    }
  };

  // Get all tasks
export const getAllTasks = async (req, res) => {
    try {
      const tasks = await Task.find({});
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Server Error' });
    }
  };

  // Get a single task
export const getTaskById = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Server Error' });
    }
  };


  // Update a task
export const updateTask = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
  
      const { title, description, completed } = req.body;
      if (completed && task.completed) {
        return res.status(400).json({ error: 'Task already completed' });
      }
  
      task.title = title || task.title;
      task.description = description || task.description;
      task.completed = completed !== undefined ? completed : task.completed;
  
      const updatedTask = await task.save();
      res.status(200).json(updatedTask);
    } catch (error) {
      res.status(500).json({ error: 'Server Error' });
    }
  };

  // Delete a task
export const deleteTask = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
  
      await task.remove();
      res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Server Error' });
    }
  };