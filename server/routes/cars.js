import express from 'express'   
import carsController from '../controllers/cars.js'
// TODO: import controller for custom items

const router = express.Router()

// TODO: define routes to get, create, edit, and delete items
// TODO: find out if these are server routes, and how useful they are at working
router.get("/:carId", carsController.getCarById)
router.get("/", carsController.getCars)
router.get("/create", carsController.createCar)
router.get("/update/:carId", carsController.updateCar)
router.get("/delete/:carId", carsController.deleteCar)

export default router