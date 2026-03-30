import {pool} from './database.js'
import "./dotenv.js"
import carsdata from '../data/cars.js'

const createCarTable = async (params) => {
    console.log('creating cars table...')
    const createCarTableQuery = `
    DROP TABLE IF EXISTS cars;
    
    CREATE TABLE IF NOT EXISTS cars (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            convertible BOOLEAN DEFAULT false,
            exterior VARCHAR(255) NOT NULL,
            roof VARCHAR(255) NOT NULL,
            wheels VARCHAR(255) NOT NULL,
            interior VARCHAR(255) NOT NULL,
            price INTEGER NOT NULL
        );
    `
    try {
        const res = await pool.query(createCarTableQuery)
        console.log('🎉 cars table created successfully')
    } catch (error) {
        console.error('⚠️ CreateCarTable Function - error creating cars table: ', error)
    }
}

const seedCarsTable = async () => {
    await createCarTable()
    console.log('seeding cars table...')

    carsdata.forEach ((car) => {
        const insertQuery = {
            text: 'INSERT INTO cars (id, name, convertible, exterior, roof, wheels, interior, price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)'
        }

        const values = [
            car.id,
            car.name,
            car.convertible,
            car.exterior,
            car.roof,
            car.wheels,
            car.interior,
            car.price
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ SeedCarsTable - error inserting car: ', err)
                return
            }

            console.log(`✅ ${car.name} added successfully`)
        })
    })
}

seedCarsTable()