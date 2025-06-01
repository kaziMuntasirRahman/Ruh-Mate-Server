const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./db/db')

const app = express()
const port = process.env.PORT

// Middleware
app.use(express.json())
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ruh-mate.web.app",
      "https://ruh-mate.firebaseapp.com",
    ],
    credentials: true,
  })
);

app.get('/', (_, res) => {
  res.send('Hello from the server side...')
})

// check if mongodb establishment is successful
connectDB()

// Import Routes
// const healthRoutes = require('./routes/1_Health')
// const examRollRoutes = require('./routes/2_Exam_Room')
const payment = require('./api/payment/stripe_payment_intent')

// use those routes
// app.use('/health', healthRoutes)
// app.use('/exam-room', examRollRoutes)
app.use('/', payment)

app.listen(port, () => {
  console.log(`This server is running in the port no: ${port}`)
})