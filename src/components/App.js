import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import ListingForm from "./ListingForm";

function App() {
  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(r => r.json())
      .then(setListings);
  }, []);

  function handleSortClick() {
    setIsSorted(!isSorted);
  }

  const sortedListings = [...listings].sort((a, b) => {
    if (a.location < b.location) {
      return -1;
    } else if (a.location > b.location) {
      return 1;
    } else {
      return 0;
    }
  });

  const displayedListings = isSorted ? sortedListings : listings;

  const filteredListings = displayedListings.filter(listing =>
    listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleAddListing(newListing) {
    setListings([newListing, ...listings]);
  }

  return (
    <div className="app">
      <Header setSearchTerm={setSearchTerm} />
      <button onClick={handleSortClick}>
        Sort by Location {isSorted ? "⬆️" : "⬇️"}
      </button>
      <ListingForm onAddListing={handleAddListing} />
      <ListingsContainer listings={filteredListings} setListings={setListings} />
    </div>
  );
}

export default App;
