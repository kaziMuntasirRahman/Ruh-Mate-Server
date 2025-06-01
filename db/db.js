const { MongoClient, ServerApiVersion } = require('mongodb')
require('dotenv').config()

const uri = process.env.MONGO_URI;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

const connectDB = async () => {
  try {
    // await client.connect()
    const db = client.db('RuhMateDB')
    // await client.db('admin').command({ ping: 1 })
    console.log('Pinged your deployment. Successfully connected to MongoDB!')
    return {
      userCollection: db.collection('users'),
      paymentCollection: db.collection('payments'),
    }
  } catch (err) {
    console.log('Failed to connect to MongoDB: ', err)
  }finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

module.exports = connectDB

