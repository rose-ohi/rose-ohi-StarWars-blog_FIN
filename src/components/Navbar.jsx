import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FavoritesDropdown from './FavoritesDropdown';

const Navbar = ({ favorites, onRemoveFromFavorites }) => {
  const navigate = useNavigate();

  // Function to handle viewing character from favorites
  const handleViewCharacter = (character) => {
    navigate(`/single/${character.id}`);
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        {/* Brand/Home link using React Router Link */}
        <Link to="/" className="navbar-brand mb-0 h1">
          Star Wars Blog
        </Link>
        
        {/* Right side of navbar - Favorites dropdown */}
        <div className="d-flex">
          <FavoritesDropdown
            favorites={favorites}
            onRemoveFromFavorites={onRemoveFromFavorites}
            onViewCharacter={handleViewCharacter}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;