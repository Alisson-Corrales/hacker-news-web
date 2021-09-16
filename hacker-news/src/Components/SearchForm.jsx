import React from "react";
import { useGlobalContext } from "../util/context";

const SearchFor = () => {
  const { query, handleSearch } = useGlobalContext();
  return (
    <section onSubmit={(e) => e.preventDefault()} className="search-sect">
      <div className="words">
        <h1 className="title">Search News</h1>
        <input
          type="text"
          placeholder="search"
          className="search"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </section>
  );
};

export default SearchFor;
