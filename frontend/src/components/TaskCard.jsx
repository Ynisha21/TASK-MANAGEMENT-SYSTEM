import { useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, Tag, Edit2, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import API from "../lib/axios";

const formatDate = (date) =>
  new Date(date).toLocaleDateString();

const TaskCard = ({ task, setTasks }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    try {
      await API.delete(`/${task._id}`);
      setTasks((prev) => prev.filter((t) => t._id !== task._id));
      toast.success("Task deleted successfully!");
    } catch {
      toast.error("Failed to delete task");
    } finally {
      setShowModal(false);
    }
  };

  const priorityColor =
    task.priority === "high"
      ? "badge-error"
      : task.priority === "medium"
      ? "badge-warning"
      : "badge-success";

  const statusColor =
    task.status === "completed"
      ? "bg-success"
      : task.status === "in progress"
      ? "bg-warning"
      : "bg-base-300";

  return (
    <>
      <div className="rounded-2xl p-4 bg-base-100 border border-base-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

        {/* Status + Priority */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className={`w-2.5 h-2.5 rounded-full ${statusColor}`} />
            <p className="text-xs capitalize">{task.status}</p>
          </div>

          <span className={`badge badge-sm ${priorityColor} capitalize`}>
            {task.priority}
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-3 text-base font-semibold">
          {task.title}
        </h2>

        {/* Description */}
        <p className="mt-1 text-sm text-base-content/70 line-clamp-2">
          {task.description}
        </p>

        {/* Created + Updated */}
        <div className="mt-2 text-xs text-base-content/50">
          <p>Created: {formatDate(task.createdAt)}</p>
          {task.createdAt !== task.updatedAt && (
            <p>Updated: {formatDate(task.updatedAt)}</p>
          )}
        </div>

        {/* Category + Due Date */}
        <div className="mt-4 flex justify-between text-xs text-base-content/70">
          <div className="flex items-center gap-1 capitalize">
            <Tag className="size-3" />
            {task.category}
          </div>

          {task.dueDate && (
            <div className="flex items-center gap-1">
              <CalendarDays className="size-3" />
              {formatDate(task.dueDate)}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="mt-4 flex justify-end gap-3">
          <Link
            to={`/task/edit/${task._id}`}
            className="text-warning hover:scale-110 transition"
          >
            <Edit2 className="size-4" />
          </Link>

          <button
            onClick={() => setShowModal(true)}
            className="text-error hover:scale-110 transition"
          >
            <Trash2 className="size-4" />
          </button>
        </div>
      </div>

      {/* Delete Modal */}
      {showModal && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-error">
              Delete Task
            </h3>
            <p className="py-4">
              Are you sure you want to delete "{task.title}"?
            </p>

            <div className="modal-action">
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button
                className="btn btn-error btn-sm"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default TaskCard;