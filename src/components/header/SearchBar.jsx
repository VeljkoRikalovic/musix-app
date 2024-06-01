import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (search.length < 2) return;
    setSearchParams(search);
    navigate(`/searchResults/${search}`);
    setSearch("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center px-4"
    >
      <label className="input input-bordered flex h-8 w-[40%] items-center gap-2 sm:w-[100%]">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </form>
  );
}

export default SearchBar;
