import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import path from 'path';

import productRoutes from './routes/product_routes.js';


dotenv.config();
const app = express();

const __dirname = path.resolve(); // Get the current directory name

app.use(express.json()); //allows us to accept JSON data in the request body
app.use("/api/products", productRoutes); 

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend','dist','index.html'))
  })}
//mounts the product routes on the /api/products path
// console.log(process.env.MONGO_URI) 
// console.log(process.env.PORT)
app.listen(process.env.PORT||5000, () => {
  connectDB();
  console.log(`Server is running on port`);
});