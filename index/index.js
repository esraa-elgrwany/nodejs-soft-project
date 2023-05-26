import express from "express";
import { engine } from 'express-handlebars';
import mongoose from "mongoose";
import dotenv from "dotenv";
import subjectsRouter from "./routes/subjectsRouter.js";
import departmentRouter from "./routes/departmentRouter.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";
import { authentication } from './middleware/authentication.js';
import createDoctorRoutes from "./database/createDocyor.js";
////////////////////////////////////////////////////////////////
import  Students_Routers  from "./routes/students.js";
///////////////////////////////////////////////////////////////////

dotenv.config();

const mongoconnectionUrl = "mongodb://127.0.0.1:27017/project";
mongoose.connect(process.env.mongoconnectionUrl);

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(methodOverride('_method'));
app.use("/subjects", authentication, subjectsRouter);
app.use("/departments", departmentRouter);
app.use("/", authRoutes);
app.use("/", createDoctorRoutes);
///////////////////////////////////////////////////////////////////////
app.use("/students", Students_Routers);

///////////////////////////////////////////////////////


app.get("/Doctor/mean", (req, res) => {
  res.render("Doctor/mean");
});

app.listen(port, () => {
  console.log("Started the application on http://localhost:" + port);
});
