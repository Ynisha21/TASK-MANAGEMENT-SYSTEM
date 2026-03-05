import React from "react";

const TaskStats = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.status === "completed").length;
  const pending = tasks.filter(t => t.status === "pending").length;
  const inProgress = tasks.filter(t => t.status === "in progress").length;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">

      <div className="bg-base-100 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl p-4 text-center">
        <h4 className="text-lg font-bold">{total}</h4>
        <p className="text-sm text-base-content/70">Total Tasks</p>
      </div>

      <div className="bg-success/10 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl p-4 text-center">
        <h4 className="text-lg font-bold text-success">{completed}</h4>
        <p className="text-sm text-base-content/70">Completed</p>
      </div>

      <div className="bg-warning/10 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl p-4 text-center">
        <h4 className="text-lg font-bold text-warning">{inProgress}</h4>
        <p className="text-sm text-base-content/70">In Progress</p>
      </div>

      <div className="bg-error/10 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl p-4 text-center">
        <h4 className="text-lg font-bold text-error">{pending}</h4>
        <p className="text-sm text-base-content/70">Pending</p>
      </div>

    </div>
  );
};

export default TaskStats;