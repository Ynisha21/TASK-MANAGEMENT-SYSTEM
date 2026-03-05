import { Search } from "lucide-react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="relative w-full md:w-80">
      <Search className="absolute left-3 top-3 size-4 text-base-content/50" />
      <input
        type="text"
        placeholder="Search tasks by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input input-bordered w-full pl-10"
      />
    </div>
  );
};

export default SearchBar;