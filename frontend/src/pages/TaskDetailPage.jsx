import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import API from "../lib/axios";
import toast from "react-hot-toast";
import { LoaderIcon, Trash2Icon, ArrowLeftIcon } from "lucide-react";

const TaskDetailPage = () => {
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await API.get(`/${id}`);
        setTask(res.data);
      } catch {
        toast.error("Failed to fetch task");
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Delete this task?")) return;

    try {
      await API.delete(`/${id}`);
      toast.success("Task deleted");
      navigate("/");
    } catch {
      toast.error("Failed to delete task");
    }
  };

  const handleSave = async () => {
    if (!task.title.trim()) {
      toast.error("Title required");
      return;
    }

    setSaving(true);
    try {
      await API.put(`/${id}`, task);
      toast.success("Task updated");
      navigate("/");
    } catch {
      toast.error("Update failed");
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

      <div className="flex justify-between mb-6">
        <Link to="/" className="btn btn-ghost">
          <ArrowLeftIcon className="size-5" /> Back
        </Link>

        <button
          onClick={handleDelete}
          className="btn btn-error btn-outline"
        >
          <Trash2Icon className="size-5" /> Delete
        </button>
      </div>

      <div className="card bg-base-100 shadow-lg">
        <div className="card-body space-y-4">

          <input
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
            value={task.priority}
            onChange={(e) =>
              setTask({ ...task, priority: e.target.value })
            }
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
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

          <input
            type="date"
            className="input input-bordered w-full"
            value={task.dueDate?.substring(0, 10)}
            onChange={(e) =>
              setTask({ ...task, dueDate: e.target.value })
            }
          />

          <button
            onClick={handleSave}
            className="btn btn-primary w-full"
            disabled={saving}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>

        </div>
      </div>
    </div>
  );
};

export default TaskDetailPage;