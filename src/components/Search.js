import React, { useState } from "react";

function Search({ setSearchTerm }) {
  const [term, setTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSearchTerm(term);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
