import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const TaskNotFound = () => {
  return (
    <div className="flex flex-col items-center py-20 text-center space-y-6">
      <div className="bg-primary/10 rounded-full p-8">
        <CheckCircle2 className="size-12 text-primary" />
      </div>

      <h3 className="text-2xl font-bold">
        No tasks found
      </h3>

      <p className="text-base-content/70">
        Start by creating your first task.
      </p>

      <Link to="/create" className="btn btn-primary">
        Create Task
      </Link>
    </div>
  );
};

export default TaskNotFound;