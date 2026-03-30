import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import dotenv from 'dotenv'
import cors from 'cors'

// TODO: import the router from your routes file
import carsRouter from './routes/cars.js'

dotenv.config()
console.log("environment Database variable is:", process.env.PGDATABASE ? "Loaded ✅" : "Missing ❌")
console.log("environment Host URL is:", process.env.PGHOST ? "Loaded ✅" : "Missing ❌")
console.log("environment password variable is:", process.env.PGPASSWORD ? "Loaded ✅" : "Missing ❌")
console.log("environment database Port is:", process.env.PGPORT ? "Loaded ✅" : "Missing ❌")
console.log("environment database username is:", process.env.PGUSER ? "Loaded ✅" : "Missing ❌")

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
    app.use(favicon(path.resolve('../', 'client', 'public', 'lightning.png')))
}
else if (process.env.NODE_ENV === 'production') {
    app.use(favicon(path.resolve('public', 'lightning.png')))
    app.use(express.static('public'))
}

// TODO: specify the api path for the server to use
// NOTE: server is using the /api endpoint
app.use('/api',carsRouter)

if (process.env.NODE_ENV === 'production') {
    app.get('/*', (_, res) =>
        res.sendFile(path.resolve('public', 'index.html'))
    )
}

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})