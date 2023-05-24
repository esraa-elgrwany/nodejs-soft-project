import { Router } from "express"
import department from "../database/department.js";
import { createstudent } from "../controller/student.js";
import { savestudent } from "../controller/student.js";


const router = new Router();




router.get("/create", createstudent);
router.post("/create", savestudent);

export default router;