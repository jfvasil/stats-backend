const express = require('express')
const app = express()
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const bodyParser = require('body-parser')
const connectDB = require('./config/database')
require('dotenv').config({path: './.env'})
const router = require('./routers/calcRouter')

connectDB()



app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api', router)

app.get("/test", (req, res) => {
    res.send("<h1>It's working 🤗</h1>")
  })


app.listen('8080',() => {
    console.log('Server Running on Port 3000')
})