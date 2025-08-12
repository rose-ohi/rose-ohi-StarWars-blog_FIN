import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "../components/Navbar";

const App = () => {
 
  const [favorites, setFavorites] = useState([]);

  // Function to add or remove a character from favorites
  const handleToggleFavorite = (character) => {
    setFavorites(currentFavorites => {
      const isAlreadyFavorite = currentFavorites.some(fav => fav.name === character.name);
      
      if (isAlreadyFavorite) {
        return currentFavorites.filter(fav => fav.name !== character.name);
      } else {
        return [...currentFavorites, character];
      }
    });
  };

  // Function to remove a character from favorites
  const handleRemoveFromFavorites = (character) => {
    setFavorites(currentFavorites => 
      currentFavorites.filter(fav => fav.name !== character.name)
    );
  };

  return (
    <div className="App">
      {/* Navigation bar - always visible */}
      <Navbar
        favorites={favorites}
        onRemoveFromFavorites={handleRemoveFromFavorites}
      />
      
  
      <Outlet context={{
        favorites,
        onToggleFavorite: handleToggleFavorite,
        onRemoveFromFavorites: handleRemoveFromFavorites
      }} />
    </div>
  );
};

export default App;