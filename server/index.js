
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js';
import * as dotenv from 'dotenv'
dotenv.config()
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use('/users',userRoutes)
const CONNECTION_URL = "mongodb+srv://sakshiss2324:Phoenix2324@cluster0.xa2t2ru.mongodb.net/?retryWrites=true&w=majority" //Insert mongoDB key here
const PORT = process.env.PORT|| 5500;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);