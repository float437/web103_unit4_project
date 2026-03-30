import React from 'react';
import '../css/CarDetails.css';
// import { Car, CircleDollarSign } from 'lucide-react'; 

const CarDetails = ({ id, car }) => {
  // Destructuring props for easy access
  const { name,convertible,exterior,interior, roof, wheels, price } = car;

  return (
    <div className="car-card-container">
      {/* Header Section */}
      <div className="car-card-header">
        {/* <Car size={24} className="header-icon" /> */}
        <h2 className="car-title">{name}</h2>
      </div>

      {/* Price Section */}
      <div className="car-price-container">
        {/* <CircleDollarSign size={24} className="price-icon" /> */}
        <span className="price-text">${price}</span>
      </div>

      {/* Main Grid for Exterior, Roof, Wheels, Interior */}
      <div className="details-grid">
        <div className="grid-box exterior-color-box">
           {/* Box 1: Exterior/Roof Color */}
           {/* <img src={images.roof} alt="Roof Selection" /> */}
           <p>{roof}</p>
        </div>
        <div className="grid-box top-view-box">
           {/* Box 2: Overhead View */}
           {/* <img src={images.exterior} alt="Exterior View" /> */}
           <p>{exterior}</p>
        </div>
        <div className="grid-box wheels-box">
           {/* Box 3: Wheels */}
           {/* <img src={images.wheels} alt="Wheels Detail" /> */}
           <p>{wheels}</p>
        </div>
        <div className="grid-box interior-box">
           {/* Box 4: Interior */}
           {/* <img src={images.interior} alt="Interior View" /> */}
           <p>{interior}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="button-group">
        <button className="btn edit-btn">EDIT</button>
        <button className="btn delete-btn">DELETE</button>
      </div>
    </div>
  );
};

export default CarDetails;