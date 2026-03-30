import React from 'react'
import { useState, useEffect } from 'react';
import '../App.css'
//TODO: why is the first letter lowercase caps and not uppercase
import CarsAPI from '../services/carsAPI';
import '../css/ViewCars.css'; // Adjust path based on your file structure
import ListItem from '../components/ListItem';

const ViewCars = () => {
    const [carsList,setCarsList] = useState([])
    useEffect(() =>{
        const fetchCars = async () => {
            try {
                const data = await CarsAPI.getAllCars()
                setCarsList(data)
            } catch (error) {
                console.error("Failed to fetch cars list:", error)
            }
        }
        fetchCars()
    },[])


    return (
    <div className="view-cars-container">
      {carsList && carsList.length > 0 ? carsList.map((car) => (
        <ListItem id={car.id} car={car} />
        //TODO: Get the 'no events retrieved' in the middle 
      )): <h2 className=""> {'No cars were able to be retrieved.'}</h2>}
    </div>
  );
}

export default ViewCars