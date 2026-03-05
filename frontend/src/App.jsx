import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateTaskPage from "./pages/CreateTaskPage";
import TaskDetailPage from "./pages/TaskDetailPage";
import EditTaskPage from "./pages/EditTaskPage";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

const App = () => {

  // 🔹 Global Filter State (Shared)
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("dueAsc");

  // 🔹 Reset Function
  const resetFilters = () => {
    setSearch("");
    setCategory("");
    setPriority("");
    setStatus("");
    setSort("dueAsc");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300">
      
      {/* Navbar */}
      <Navbar resetFilters={resetFilters} />

      <Toaster position="top-right" />

      <div className="container mx-auto px-4 py-6">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                priority={priority}
                setPriority={setPriority}
                status={status}
                setStatus={setStatus}
                sort={sort}
                setSort={setSort}
              />
            }
          />
          <Route path="/create" element={<CreateTaskPage />} />
          <Route path="/task/:id" element={<TaskDetailPage />} />
          <Route path="/task/edit/:id" element={<EditTaskPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;