import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/tasks",
  headers: {
    "Content-Type": "application/json",
  },
});

// Get all tasks (with search + filter)
export const fetchTasks = (params = {}) =>
  API.get("/", { params });

// Get single task
export const fetchTaskById = (id) =>
  API.get(`/${id}`);

// Create task
export const createTask = (data) =>
  API.post("/", data);

// Update task
export const updateTask = (id, data) =>
  API.put(`/${id}`, data);

// Delete task
export const deleteTask = (id) =>
  API.delete(`/${id}`);

export default API;