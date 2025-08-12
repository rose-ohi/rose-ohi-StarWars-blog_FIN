import React from 'react';

const CharacterDetails = ({ character, onClose }) => {
  // If no character is selected, don't render anything
  if (!character) return null;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          {/* Header with character name and close button */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h1>{character.name}</h1>
            <button className="btn btn-secondary" onClick={onClose}>
              Back to Characters
            </button>
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
                  <p className="text-muted">
                    This character appears in the Star Wars universe with these documented characteristics. 
                    More information may be available in the films and other media.
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

export default CharacterDetails;