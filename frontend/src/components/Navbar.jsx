import { Link, useLocation, useNavigate } from "react-router-dom";
import { PlusIcon, ListTodo } from "lucide-react";

const Navbar = ({ resetFilters }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAllTasksClick = () => {
    if (resetFilters) {
      resetFilters();   // 🔹 reset filters first
    }
    navigate("/");      // 🔹 then navigate to home
  };

  return (
    <header className="bg-base-100 border-b border-base-300 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          onClick={handleAllTasksClick}
          className="flex items-center gap-2 text-xl font-bold text-primary"
        >
          <ListTodo className="size-6" />
          Task Management System
        </Link>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          
          <button
            onClick={handleAllTasksClick}
            className={`btn btn-ghost btn-sm ${
              location.pathname === "/" ? "btn-active" : ""
            }`}
          >
            All Tasks
          </button>

          <Link
            to="/create"
            className="btn btn-primary btn-sm rounded-xl flex items-center gap-2"
          >
            <PlusIcon className="size-4" />
            New Task
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Navbar;