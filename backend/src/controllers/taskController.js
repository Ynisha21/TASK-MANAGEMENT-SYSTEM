import Task from "../models/taskModel.js";

export async function createTask(req, res) {
  try {
    const { title, description, priority, category, status, dueDate } =
      req.body;

    if (!title || !description || !category || !dueDate) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const task = await Task.create({
      title,
      description,
      priority,
      category,
      status,
      dueDate,
    });

    res.status(201).json(task);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getAllTasks(req, res) {
  try {
    const { search, category, status, priority, sort } = req.query;

    let filter = {};

    // Category Filter
    if (category) filter.category = category;

    // Status Filter
    if (status) filter.status = status;

    // Priority Filter
    if (priority) filter.priority = priority;

    // Sorting Logic 
    let sortOption = { dueDate: -1 };

    if (sort === "dueDesc") {
      sortOption = { dueDate: -1 };
    } else {
      sortOption = { dueDate : 1};
    }
    
    let tasks;

    // Search Using MongoDB Text Index
    if (search) {
      tasks = await Task.find({
        $and: [
          filter,
          {
            $or: [
              { title: { $regex: search, $options: "i" } },
              { description: { $regex: search, $options: "i" } },
            ],
          },
        ],
      }).sort(sortOption);
    } else {
      tasks = await Task.find(filter).sort(sortOption);
    }

    res.status(200).json(tasks);
  } catch (error) {
      console.error("Error fetching tasks:", error);
      res.status(500).json({ message: "Internal server error" });
    }
}

export async function getTaskById(req, res) {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateTask(req, res) {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteTask(req, res) {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}