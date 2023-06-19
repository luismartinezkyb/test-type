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

// import express, {Express, Response, Request} from 'express';



// const app:Express = express();

// //config
// const PORT = process.env.PORT || 3001;

// //
// app.use(express.json());
// //middlewares


// //routes

// app.get('/api', (req:Request, res:Response)=>{
// 	console.log('Testing..');
// 	res.send('Hola mundo');
// });
// app.get('/hola', (req:Request, res:Response)=>{
// 	console.log('Testing..');
// 	res.send('AHORA TESTING')
// });
//listen

app.listen(PORT, ()=>console.log(`Your app is listening on ${PORT}`));
