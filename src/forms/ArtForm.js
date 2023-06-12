import React, { useState } from 'react';

const ArtForm = () => {
  const [artwork, setArtwork] = useState({
    title: '',
    artist: '',
    description: ''
  });

  const handleChange = (e) => {
    setArtwork({
      ...artwork,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit the form or send the artwork data to the server
    console.log('Artwork submitted:', artwork);
    // Reset the form
    setArtwork({
      title: '',
      artist: '',
      description: ''
    });
  };

  return (
    <div>
      <h2>Add Artwork</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={artwork.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="artist">Artist:</label>
          <input
            type="text"
            id="artist"
            name="artist"
            value={artwork.artist}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={artwork.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ArtForm;
