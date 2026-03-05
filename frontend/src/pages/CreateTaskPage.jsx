import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon } from "lucide-react";

const CreateTaskPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "study",
    priority: "medium",
    status: "pending",
    dueDate: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      toast.error("Task title is required");
      return;
    }

    try {
      setLoading(true);

      await API.post("/", form);

      toast.success("Task created successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">

      <Link to="/" className="btn btn-ghost mb-6">
        <ArrowLeftIcon className="size-5" />
        Back to Tasks
      </Link>

      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4">
            Create New Task
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Title */}
            <input
              type="text"
              name="title"
              placeholder="Task title"
              className="input input-bordered w-full"
              value={form.title}
              onChange={handleChange}
            />

            {/* Description */}
            <textarea
              name="description"
              placeholder="Task description"
              className="textarea textarea-bordered w-full"
              value={form.description}
              onChange={handleChange}
            />

            {/* Category */}
            <select
              name="category"
              className="select select-bordered w-full"
              value={form.category}
              onChange={handleChange}
            >
              <option value="study">Study</option>
              <option value="personal">Personal</option>
              <option value="work">Work</option>
            </select>

            {/* Priority */}
            <select
              name="priority"
              className="select select-bordered w-full"
              value={form.priority}
              onChange={handleChange}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>

            {/* Status */}
            <select
              name="status"
              className="select select-bordered w-full"
              value={form.status}
              onChange={handleChange}
            >
              <option value="pending">Pending</option>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>

            {/* Due Date */}
            <input
              type="date"
              name="dueDate"
              className="input input-bordered w-full"
              value={form.dueDate}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="btn btn-primary rounded-xl w-full"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Task"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskPage;