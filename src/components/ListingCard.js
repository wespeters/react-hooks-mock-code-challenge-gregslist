import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {
  const { id, description, image, location } = listing;
  const [isFavorited, setIsFavorited] = useState(false);

  function handleFavoriteClick() {
    setIsFavorited(!isFavorited);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, { method: "DELETE" })
      .then(r => r.json())
      .then(() => onDeleteListing(id));
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button className="emoji-button favorite active" onClick={handleFavoriteClick}>
          {isFavorited ? "★" : "☆"}
        </button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
