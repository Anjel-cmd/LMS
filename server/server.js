import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'

//Initialize Express
const app = express()

//Connect to database
// await connectDB()

//Middlewares
app.use(cors())

//Routes
app.get('/', (req, res)=> res.send("API Working"))
app.post('/clerk',
    //  express.json(), clerkWebhooks)
    express.raw({ type: "application/json" }),
  async (req, res) => {
    await connectDB();          // ✅ CONNECT HERE
    return clerkWebhooks(req, res);
  }
);

//Port
const PORT = process.env.PORT || 5000

// app.listen(PORT, ()=>{
//     console.log(`Server is running on port ${PORT}`)
// })

export default app

