const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./db/db')

const app = express()
const port = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

app.get('/', (_, res) => {
  res.send('Hello from the server side...')
})

// check if mongodb establishment is successful
connectDB()

// Import Routes
// const healthRoutes = require('./routes/1_Health')
// const examRollRoutes = require('./routes/2_Exam_Room')

// use those routes
// app.use('/health', healthRoutes)
// app.use('/exam-room', examRollRoutes)

app.listen(port, () => {
  console.log(`This server is running in the port no: ${port}`)
})