import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';

export const Single = () => {
  // Get the character ID from the URL parameters
  const { theId } = useParams();
  
  // Hook for navigation (to go back)
  const navigate = useNavigate();
  
  // Get favorites functions from parent component
  const { favorites, onToggleFavorite } = useOutletContext();

  // Local state for this page
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch character data when component loads or ID changes
  useEffect(() => {
    if (theId) {
      fetchCharacter(theId);
    }
  }, [theId]);

  // Function to fetch a specific character from SWAPI
  const fetchCharacter = async (id) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`https://www.swapi.tech/api/people/${id}/?expanded=true`);
      
      if (!response.ok) {
        throw new Error('Character not found');
      }
      
      const data = await response.json();
      setCharacter({
        ...data,
        // id: id,
        // Extracting character details from API; the response
        name: data.result.properties.name,
        birth_year: data.result.properties.birth_year,
        gender: data.result.properties.gender,
        height: data.result.properties.height,
        mass: data.result.properties.mass,
        hair_color: data.result.properties.hair_color,
        skin_color: data.result.properties.skin_color,
        eye_color: data.result.properties.eye_color 
        
      });
      
    } catch (err) {
      setError(err.message);
      console.error('Error fetching character:', err);
    } finally {
      setLoading(false);
    }
  };

  // Check if current character is in favorites
  const isFavorite = character && favorites.some(fav => fav.name === character.name);

  // Handle back navigation
  const handleGoBack = () => {
    navigate('/');
  };

  // Loading state
  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading character details...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="container mt-5 text-center">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Character Not Found</h4>
          <p>{error}</p>
          <button className="btn btn-primary" onClick={handleGoBack}>
            Back to Characters
          </button>
        </div>
      </div>
    );
  }

  // No character found error
  if (!character) {
    return (
      <div className="container mt-5 text-center">
        <p>No character found.</p>
        <button className="btn btn-primary" onClick={handleGoBack}>
          Back to Characters
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          {/* Header with character name and buttons */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h1>{character.name}</h1>
            <div>
              <button 
                className={`btn me-2 ${isFavorite ? 'btn-warning' : 'btn-outline-warning'}`}
                onClick={() => onToggleFavorite(character)}
              >
                {isFavorite ? ' Remove from Favorites' : ' Add to Favorites'}
              </button>
              <button className="btn btn-secondary" onClick={handleGoBack}>
                Back to Characters
              </button>
            </div>
          </div>
          
          <div className="row">
            {/* Character image column */}
            <div className="col-md-4">
              <img 
                src={`https://via.placeholder.com/400x300?text=${character.name}`}
                alt={character.name}
                className="img-fluid rounded"
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
            </div>
            
            {/* Character details column */}
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Character Details</h5>
                  
                  {/* Character information grid */}
                  <div className="row">
                    <div className="col-sm-6">
                      <p><strong>Birth Year:</strong> {character.birth_year}</p>
                      <p><strong>Gender:</strong> {character.gender}</p>
                      <p><strong>Height:</strong> {character.height} cm</p>
                      <p><strong>Mass:</strong> {character.mass} kg</p>
                    </div>
                    <div className="col-sm-6">
                      <p><strong>Hair Color:</strong> {character.hair_color}</p>
                      <p><strong>Skin Color:</strong> {character.skin_color}</p>
                      <p><strong>Eye Color:</strong> {character.eye_color}</p>
                    </div>
                  </div>
                  
                  {/* Additional info section */}
                  <hr />
                  <p className="text-muted bg-success">
                    This is basic character information from the Star Wars universe. 
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};