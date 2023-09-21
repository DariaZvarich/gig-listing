import { useState } from 'react';
import "./Gig.css"; 

function Gig(props) {
  const { bandName, imageUrl, description, dateTime, location } = props;

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="gig">
      <h3 className="band-name">{bandName}</h3>
      <img src={imageUrl} alt="Band Image" width="300" height="200" />
      <p className="description">{description}</p>
      <p className="date-time">{dateTime}</p>
      <p className="location">{location}</p>

      <button onClick = {toggleFavorite}>
        {isFavorite ? 'Remove from Favorites': 'Add to Favorites'}
        </button>
        {isFavorite && <p className='favorite-status'>Favorited</p>}
    
    </div>

  );
  
}

export default Gig;