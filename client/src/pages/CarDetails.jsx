import React from 'react'
import { useState, useEffect } from 'react';
import '../App.css'
import CarsAPI from '../services/carsAPI';
import '../css/ViewCars.css'; // Adjust path based on your file structure
import CarInfo from '../components/CarDetails';
import { useParams } from 'react-router-dom';

const CarDetails = () => {
    const [carItem,setCarItem] = useState([])
    const {carId} = useParams();
        useEffect(() =>{
            const fetchCar = async () => {
                try {
                    const data = await CarsAPI.getCarById(carId)
                    setCarItem(data)
                } catch (error) {
                    console.error("Failed to fetch cars list:", error)
                }
            }
            fetchCar()
        },[carId])


        return (
        <div className="view-cars-container">
        {carItem && Object.keys(carItem).length > 0 ? (
            <CarInfo id={carItem.id} car={carItem} />
        ) : (
            <h2 className="">{'No car retrieved, is this a valid car?'}</h2>
        )}
        </div>
    );
}

export default CarDetails