import {config} from 'dotenv'; config(); //invoking  this immediately to use the environment variables
import mongoose from 'mongoose';


mongoose.connect(process.env.MONGO_URI) 


Mongoose.connection.once('open', () => {
    console.log(`conncted to Database: ${mongoose.connection.name}`);
});