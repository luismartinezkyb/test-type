//imports

import express from 'express';

import dotenv from 'dotenv'
dotenv.config()
import diaryRoute from './routes/diaries';

//Initializations
const PORT:string|number = process.env.PORT || 3001;
//config
const app = express();

//middlewarees
app.use(express.json());
//routes

app.use('/api/diary',diaryRoute);

//listen

app.listen(PORT, ()=>console.log(`Your app is listening on ${PORT}`));