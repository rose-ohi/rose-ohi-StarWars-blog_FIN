import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Faves from './Faves';

const Navbar = ({ favorites, onRemoveFromFavorites }) => {
  const navigate = useNavigate();

  // Function to handle viewing character from favorites
  const handleViewCharacter = (character) => {
    navigate(`/single/${character.id}`);
  };

  return (
    <nav className="navbar navbar-light bg-success">
      <div className="container-fluid">
        {/* Home link: using React Router Link */}
        <Link to="/" className="navbar-brand mb-0 h1 ">
          Star Wars Blog
        </Link>
        
        {/* Right side of navbar - Favorites dropdown */}
        <div className="d-flex">
          <Faves
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