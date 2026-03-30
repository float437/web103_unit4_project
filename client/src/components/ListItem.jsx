import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ListItem.css';

const Item = ({ id, car }) => {
  return (
    <div className="car-card">
      <div className="car-header">
        <div className="car-title">
          <span className="car-icon">🏎️</span>
          <h2>{car.name}</h2>
        </div>
        <div className="car-price">
          <span>💰</span>
          <h3>${car.price}</h3>
        </div>
      </div>

      <div className="car-details-grid">
        <div className="detail-item">
          <span>🖌️ <strong>Exterior:</strong> {car.exterior}</span>
        </div>
        <div className="detail-item">
          <span>⚙️ <strong>Wheels:</strong> {car.wheels}</span>
        </div>
        <div className="detail-item">
          <span>😎 <strong>Roof:</strong> {car.roof}</span>
        </div>
        <div className="detail-item">
          <span>💺 <strong>Interior:</strong> {car.interior}</span>
        </div>
      </div>

      <Link to={`${id}`}>
        <button className="details-button">DETAILS</button>
      </Link>
    </div>
  );
};

export default Item;