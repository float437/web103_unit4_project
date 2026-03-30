import {pool} from '../config/database.js'

const getCars = async (req,res) => {
    try {
        const selectAllQuery = `
            SELECT * FROM cars ORDER BY id ASC
        `
        const results = await pool.query(selectAllQuery)
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }
}

const getCarById = async (req,res) => {
    try {
        const selectAllQuery = `
            SELECT * FROM cars WHERE id = $1
        `
        const carId = req.params.carId
        const results = await pool.query(selectAllQuery,[carId])

        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }
}

const createCar = async (req,res) => {
    // creating variables to hold the information coming from the request
    // the id will be made by the database 
    const {name, convertible, exterior, roof, wheels, interior, price } = req.body
    // could do error handling here to ensure variables came in right.
    try {
        const createCarQuery = `
            INSERT INTO cars (name, convertible, exterior, roof, wheels, interior, price) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *
        `
        // passing the variables into the query to pass onto the database
        const results = await pool.query(createCarQuery, [name, convertible, exterior, roof, wheels, interior, price])
        // returning the row from the db
        res.status(201).json(results.rows[0])
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }
}

const updateCar = async (req,res) => {
    const {name, convertible, exterior, roof, wheels, interior, price } = req.body
    try {
        const id = parseInt(req.params.id)
        const updateCarQuery = `
            UPDATE cars SET name = $1, convertible = $2, exterior = $3, roof = $4, wheels = $5, interior = $6, price = $7) WHERE id = $8 
        `
        const results = await pool.query(updateCarQuery, [name, convertible, exterior, roof, wheels, interior, price, id])
        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }
}

const deleteCar = async (req,res) => {
    try {
        const id = parseInt(req.params.id)
        const deleteCarQuery = `
            DELETE FROM cars WHERE id = $1
        `
        const results = await pool.query(deleteCarQuery, [id])
        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }
}

//TODO: Export the functions you create.
export default {getCars,getCarById, createCar, updateCar,deleteCar}