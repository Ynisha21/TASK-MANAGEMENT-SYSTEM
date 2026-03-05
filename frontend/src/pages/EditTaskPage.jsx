import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import API from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, LoaderIcon } from "lucide-react";

const EditTaskPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    description: "",
    category: "study",
    status: "pending",
    priority: "medium",
    dueDate: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await API.get(`/${id}`);
        setTask({
          ...res.data,
          dueDate: res.data.dueDate?.substring(0, 10),
        });
      } catch (error) {
        toast.error("Failed to load task");
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!task.title.trim()) {
      toast.error("Title is required");
      return;
    }

    setSaving(true);

    try {
      await API.put(`/${id}`, task);
      toast.success("Task updated successfully");
      navigate("/");
    } catch (error) {
      toast.error("Failed to update task");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">

      <Link to="/" className="btn btn-ghost mb-6">
        <ArrowLeftIcon className="size-5" />
        Back to Tasks
      </Link>

      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4">
            Edit Task
          </h2>

          <form onSubmit={handleUpdate} className="space-y-4">

            <input
              type="text"
              className="input input-bordered w-full"
              value={task.title}
              onChange={(e) =>
                setTask({ ...task, title: e.target.value })
              }
            />

            <textarea
              className="textarea textarea-bordered w-full"
              value={task.description}
              onChange={(e) =>
                setTask({ ...task, description: e.target.value })
              }
            />

            <select
              className="select select-bordered w-full"
              value={task.category}
              onChange={(e) =>
                setTask({ ...task, category: e.target.value })
              }
            >
              <option value="study">Study</option>
              <option value="personal">Personal</option>
              <option value="work">Work</option>
            </select>

            <select
              className="select select-bordered w-full"
              value={task.status}
              onChange={(e) =>
                setTask({ ...task, status: e.target.value })
              }
            >
              <option value="pending">Pending</option>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>

            <select
              className="select select-bordered w-full"
              value={task.priority}
              onChange={(e) =>
                setTask({ ...task, priority: e.target.value })
              }
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>

            <input
              type="date"
              className="input input-bordered w-full"
              value={task.dueDate}
              onChange={(e) =>
                setTask({ ...task, dueDate: e.target.value })
              }
            />

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={saving}
            >
              {saving ? "Updating..." : "Update Task"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTaskPage;