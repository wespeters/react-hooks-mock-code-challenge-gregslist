import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings }) {
  function handleDeleteListing(id) {
    setListings(listings.filter(listing => listing.id !== id));
  }

  const listingCards = listings.map(listing => (
    <ListingCard key={listing.id} listing={listing} onDeleteListing={handleDeleteListing} />
  ));

  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
