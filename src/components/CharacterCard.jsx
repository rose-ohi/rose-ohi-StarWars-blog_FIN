import React from 'react';

const CharacterCard = ({ character, onAddToFavorites, onViewDetails, isFavorite }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "10px" }}>
      {/* Card image - using a placeholder since SWAPI doesn't provide images */}
      <img 
        src={`https://via.placeholder.com/300x200?text=${character.name}`} 
        className="card-img-top" 
        alt={character.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      
      <div className="card-body">
        {/* Character name as card title */}
        <h5 className="card-title">{character.name}</h5>
        
        {/* Basic character info */}
        <p className="card-text">
          <small className="text-muted">
            Gender: {character.gender}<br/>
            Hair Color: {character.hair_color}<br/>
            Eye Color: {character.eye_color}
          </small>
        </p>
        
        {/* Action buttons */}
        <div className="d-flex justify-content-between">
          {/* Learn More button - opens detailed view */}
          <button 
            className="btn btn-outline-primary btn-sm" 
            onClick={() => onViewDetails(character)}
          >
            Learn more!
          </button>
          
          {/* Favorite button - adds/removes from favorites list */}
          <button 
            className={`btn btn-sm ${isFavorite ? 'btn-warning' : 'btn-outline-warning'}`}
            onClick={() => onAddToFavorites(character)}
          >
            {/* star icon */}
            <i class="fa-solid fa-star"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;