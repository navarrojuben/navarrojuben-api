require('dotenv').config()

const cors=require('cors')
const express = require('express')
const mongoose = require('mongoose')
const linkRoutes = require('./routes/links')
const userRoutes = require('./routes/user')

// express app
const app = express()

//cors
app.use(cors({
  origin:
  [
    "http://localhost:3000",
    "http://localhost:4000",
    "https://navarrojuben.onrender.com"
  ]
}))
//https://navarrojuben.onrender.com/api/links
//https://navarrojuben.onrender.com/api/user

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/links', linkRoutes)
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
  