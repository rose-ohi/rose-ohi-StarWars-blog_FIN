import React from 'react';

const FavoritesDropdown = ({ favorites, onRemoveFromFavorites, onViewCharacter }) => {
  return (
    <div className="dropdown">
      {/* Dropdown toggle button showing favorites count */}
      <button 
        className="btn btn-primary dropdown-toggle" 
        type="button" 
        id="favoritesDropdown" 
        data-bs-toggle="dropdown" 
        aria-expanded="false"
      >
        Favorites ({favorites.length})
      </button>
      
      {/* Dropdown menu containing favorite items */}
      <ul className="dropdown-menu" aria-labelledby="favoritesDropdown">
        {favorites.length === 0 ? (
          // Show message when no favorites exist
          <li><span className="dropdown-item text-muted">No favorites yet</span></li>
        ) : (
          // Map through favorites and create dropdown items
          favorites.map((character, index) => (
            <li key={`${character.name}-${index}`} className="dropdown-item-text">
              <div className="d-flex justify-content-between align-items-center p-2">
                {/* Character name - clickable to view details */}
                <span 
                  className="text-primary" 
                  style={{ cursor: 'pointer' }}
                  onClick={() => onViewCharacter(character)}
                >
                  {character.name}
                </span>
                
                {/* Remove button */}
                <button 
                  className="btn btn-sm btn-outline-danger"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent dropdown from closing
                    onRemoveFromFavorites(character);
                  }}
                  title={`Remove ${character.name} from favorites`}
                >
                    {/* trash icon for faves */}
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default FavoritesDropdown;