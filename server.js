import { config } from 'dotenv'; config();
import express from 'express'; // added to package.json "type":"module", to allow import express instead of const express.Can't use import/export unless you do this.
import cors from 'cors';
import notesRouter from './routes/notes-router.js';
import './database/database.js';


const app = express();
const PORT= process.env.PORT || 3000; // user could still run the server with this port, 

//Middleware
app.use(express.urlencoded({ extended: true}))
app.use(express.json());
app.use(cors());
app.use('/notes', notesRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
})