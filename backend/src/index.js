import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/user.route.js';
// import ConnectDB from './database/database.js';
import bodyParser from 'body-parser';
import {connectDB} from './database/database1.js'
const port = process.env.PORT || 4000
dotenv.config()
const app = express()
app.use(cors())
// ConnectDB();
connectDB();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', (req, res)=>{
  res.send('Rupendra Vishwakarma');
})

//  routes to call  
app.use('/api', userRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


