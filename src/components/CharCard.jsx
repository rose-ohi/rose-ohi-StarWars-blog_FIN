import React from 'react';

const CharCard = ({ character, onAddToFavorites, onViewDetails, isFavorite }) => {
  return (
    <div className="card container d-flex align-items-center" style={{ width: "18rem", margin: "10px" }}>
      {/* Card image section - using a placeholder since SWAPI doesn't provide images */}
      <img 
        src={`https://static1.srcdn.com/wordpress/wp-content/uploads/2024/08/the-millennium-falcon-and-the-razor-crest-from-the-star-wars-franchise.jpg/${character.name}`} 
        className="card-img-top" 
        alt={character.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      
      <div className="card-body">
        {/* Character name as card title */}
        <h5 className="card-title">{character.name}</h5>
        
        {/* Basic character info preview on card */}
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

export default CharCard;