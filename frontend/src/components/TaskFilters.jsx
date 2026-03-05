const TaskFilters = ({
  category,
  setCategory,
  priority,
  setPriority,
  status,
  setStatus,
}) => {
  return (
    <div className="flex flex-wrap gap-4">

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="select select-bordered"
      >
        <option value="">All Categories</option>
        <option value="study">Study</option>
        <option value="personal">Personal</option>
        <option value="work">Work</option>
      </select>

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="select select-bordered"
      >
        <option value="">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="select select-bordered"
      >
        <option value="">All Status</option>
        <option value="pending">Pending</option>
        <option value="in progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

    </div>
  );
};

export default TaskFilters;