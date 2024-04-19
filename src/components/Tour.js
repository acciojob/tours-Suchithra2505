// Tour.js
import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article className="tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
        {showInfo ? (info && typeof info === 'string' ? info : '') : (info && typeof info === 'string' ? `${info.substring(0, 200)}...` : '')}
  <button onClick={toggleInfo}>
    {showInfo ? 'See Less' : 'Read More'}
  </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
