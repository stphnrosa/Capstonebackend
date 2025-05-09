import { config } from 'dotenv'; config();
import express from 'express';
import cors from 'cors';
import notesRouter from './routes/notes-router.js';
import './database/database.js';


const app =express();
const PORT= process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}))
app.use(express.json());
app.use(cors());
app.use('/notes', notesRouter);

app.listen(PORT, () => {
    console.log(`Serve is listening on ${PORT}`);
})