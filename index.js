import express from 'express'
import { engine } from 'express-handlebars';
import doctorRoute from './routes/doctorRoute.js'
import mongoose from 'mongoose';


mongoose.connect('mongodb://127.0.0.1:27017/doctors')

 const app = express()

 app.engine('handlebars', engine());
 app.set('view engine', 'handlebars');
 app.set('views', './templates');

app.use('/doctor', doctorRoute)




 app.listen(9000)