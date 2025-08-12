import React, { useState, useEffect } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import CharacterList from '../components/CharacterList';

export const Home = () => {
  // Get favorites functions from the parent App component via Outlet context
  const { favorites, onToggleFavorite } = useOutletContext();
  
  // Hook for programmatic navigation (to go to single character page)
  const navigate = useNavigate();

  // Local state for this page
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch characters when component loads
  useEffect(() => {
    fetchCharacters();
  }, []);

  // Function to fetch characters from SWAPI
  const fetchCharacters = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('https://www.swapi.tech/api/people');
	//   https://www.swapi.tech/api/people/?expanded=true
      
      if (!response.ok) {
        throw new Error('Failed to fetch characters');
      }
      
      const data = await response.json();
      
      // Add ID to each character for routing (extract from URL)
      const charactersWithIds = data.results.map((character, index) => ({
        ...character,
        id: index + 1 // Simple ID based on position
      }));
      
      setCharacters(charactersWithIds);
      
    } catch (err) {
      setError(err.message);
      console.error('Error fetching characters:', err);
    } finally {
      setLoading(false);
    }
  };

  // Function to navigate to character details page
  const handleViewDetails = (character) => {
    navigate(`/single/${character.id}`);
  };

  // Error display
  if (error) {
    return (
      <div className="container mt-5 text-center">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Oops! Something went wrong</h4>
          <p>{error}</p>
          <button className="btn btn-primary" onClick={fetchCharacters}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container mt-4">
        <h1 className="text-center mb-4">Star Wars Characters</h1>
      </div>
      
      <CharacterList
        characters={characters}
        favorites={favorites}
        onAddToFavorites={onToggleFavorite}
        onViewDetails={handleViewDetails}
        loading={loading}
      />
    </div>
  );
};