import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(r => r.json())
      .then(setListings);
  }, []);

  const filteredListings = listings.filter(listing =>
    listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header setSearchTerm={setSearchTerm} />
      <ListingsContainer listings={filteredListings} setListings={setListings} />
    </div>
  );
}

export default App;
