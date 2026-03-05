import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import API from "../lib/axios";
import TaskCard from "../components/TaskCard";
import TaskNotFound from "../components/TaskNotFound";
import SearchBar from "../components/SearchBar";
import TaskFilters from "../components/TaskFilters";
import TaskStats from "../components/TaskStats";

const HomePage = ({
  search,
  setSearch,
  category,
  setCategory,
  priority,
  setPriority,
  status,
  setStatus,
  sort,
  setSort
}) => {

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);

        const res = await API.get("/", {
          params: { search, category, priority, status, sort },
        });

        setTasks(res.data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load tasks");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [search, category, priority, status, sort]);

  return (
    <div className="space-y-6">

      {/* Search + Filters */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">

        <SearchBar search={search} setSearch={setSearch} />

        <div className="grid grid-cols-2 sm:flex gap-3 w-full sm:w-auto">

          <TaskFilters
            category={category}
            setCategory={setCategory}
            priority={priority}
            setPriority={setPriority}
            status={status}
            setStatus={setStatus}
          />

          {/* Sorting */}
          <select
            className="select select-bordered"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="dueAsc">Nearest Deadline</option>
            <option value="dueDesc">Farthest Deadline</option>
          </select>

        </div>
      </div>

      <TaskStats tasks={tasks} />

      {loading && (
        <div className="text-center py-10 text-primary">
          Loading tasks...
        </div>
      )}

      {!loading && tasks.length === 0 && <TaskNotFound />}

      {!loading && tasks.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <TaskCard key={task._id} task={task} setTasks={setTasks} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;