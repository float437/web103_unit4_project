const BASE_URL = "http://localhost:3000/api"

// getallcars
// getcarbyId
// updatecarbyId
// deletecarbyId

const getAllCars = async () => {
    try{
    const response = await fetch(`${BASE_URL}`)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json()
    console.log(`CarsAPI getAllCars- data inside ${BASE_URL}  endpoint : `, data)
    return data
    }catch(error){
    console.error("CarsAPI getAllCars- Could not fetch events:", error);
    return []; 
    }
}

const getCarById = async (id) =>{
    try{
        const endpoint = `${BASE_URL}/${id}`
        console.log(`CarsAPI getCarById- fetching car with id:${id} from ${endpoint} : `)
        const response = await fetch(endpoint)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json()
        console.log(`CarsAPI getCarById- data inside ${endpoint} : `, data)
        return data
    }catch(error){
    console.error("CarsAPI getCarById- Could not fetch car by id:", error);
        return []; 
    }
}

const createCar = async (car) =>{
    const endpoint = `${BASE_URL}/create`
}

//TODO: may have to pass the id into the car object so it can be used in the body
//TODO: may have to pass the car object to the function
const updateCarById = async (id,car) =>{
    try{
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car),
        }

        const endpoint = `${BASE_URL}/update/${id}`
        console.log(`CarsAPI updateCarById- updating car with id:${id} from ${endpoint} : `)

        const response = await fetch(endpoint, options)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        window.location('/')
    }catch(error){
    console.error("CarsAPI updateCarById- Could not update car with id:", error);
        return []; 
    }
}

const deleteCarById = async (id) =>{
    try{
        const endpoint = `${BASE_URL}/delete/${id}`
        console.log(`CarsAPI deleteCarById- deleting car with id:${id} from ${endpoint} : `)
        const response = await fetch(endpoint)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json()
        console.log(`CarsAPI deleteCarById- data inside ${endpoint} : `, data)
        return data
    }catch(error){
    console.error("CarsAPI deleteCarById- Could not delete car with id:", error);
        return []; 
    }
}

export default {getAllCars, getCarById, createCar, updateCarById, deleteCarById}