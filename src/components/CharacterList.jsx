import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = ({ 
  characters, 
  favorites, 
  onAddToFavorites, 
  onViewDetails, 
  loading 
}) => {
  
  
  const isFavorite = (character) => {
    return favorites.some(fav => fav.name === character.name);
  };

  // Show loading spinner while data is being fetched
  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading Star Wars characters...</p>
      </div>
    );
  }

  if (!characters || characters.length === 0) {
    return (
      <div className="text-center mt-5">
        <p className="text-muted">No characters found.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Map through characters and create a card for each one */}
        {characters.map((character, index) => (
          <div key={`${character.name}-${index}`} className="col-auto">
            <CharacterCard
              character={character}
              onAddToFavorites={onAddToFavorites}
              onViewDetails={onViewDetails}
              isFavorite={isFavorite(character)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;