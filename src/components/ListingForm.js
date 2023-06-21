import React, { useState } from "react";

function ListingForm({ onAddListing }) {
  const [formData, setFormData] = useState({
    description: "",
    image: "",
    location: ""
  });

  function handleFormChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(onAddListing);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleFormChange}
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleFormChange}
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleFormChange}
      />
      <button type="submit">Add Listing</button>
    </form>
  );
}

export default ListingForm;
